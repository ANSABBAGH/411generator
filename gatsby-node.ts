import path from "path";
import fs from "fs";
import type { ClientData } from "./src/types";
import _ from "lodash";
import { xml2json } from "xml-js";
import { UploadManagerService } from "./utils/UploadManager.service";
import { LoggerService } from "./utils/Logger.service";

const loggerService = new LoggerService();
const uploadManagerService = new UploadManagerService();
const oldSitemap = parseSitemapUrls();
const startTime = new Date();

function parseSitemapUrls() {
  const sitemap = fs
    .readFileSync(path.join(__dirname, "./public/sitemap-0.xml"), "utf8")
    .toString();
  const sitemapAsJson = xml2json(sitemap, { spaces: 4, compact: true });
  return JSON.parse(sitemapAsJson).urlset.url.map((url: any) => url.loc._text);
}

export const createPages = async ({ actions }: any) => {
  const { createPage } = actions;

  const data: ClientData[] = require("./content/companies.json");

  const companyTemplate = path.resolve(`src/templates/Client.tsx`);

  data.forEach((company: ClientData) => {
    createPage({
      path: `/companies/${_.snakeCase(company["nom de l´entreprise"] as string)}`,
      component: companyTemplate,
      context: {
        company
      }
    });
  });
};

export const onPostBuild = async ({ graphql }: any) => {
  const newSitemap = parseSitemapUrls();
  const newUrls = _.difference(newSitemap, oldSitemap);
  const deletedUrls = _.difference(oldSitemap, newSitemap);

  try {
    await uploadManagerService.uploadFolder();
    loggerService.log(`
      - Script finished at: ${new Date().toISOString()} -
      - Script took ${new Date().getTime() - startTime.getTime()} ms to finish -
      Uploaded ${newUrls.length} new files
      Deleted ${deletedUrls.length} files
      Details: ${JSON.stringify({ newUrls, deletedUrls }, null, 4)}
      `);
  } catch (error: any) {
    loggerService.log(
      "something happened on the generation: " + JSON.stringify(error.message, null, 4),
      "error"
    );
  }
};

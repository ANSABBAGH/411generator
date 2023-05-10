import path from "path";
import type { ClientData } from "./src/types";
import _ from "lodash";

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

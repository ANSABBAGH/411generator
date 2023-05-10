import path from "path";
import type { ClientData } from "./src/types";

export const createPages = async ({ actions }: any) => {
  const { createPage } = actions;

  const data: ClientData[] = require("./content/companies.json");

  const companyTemplate = path.resolve(`src/templates/Client.tsx`);

  data.forEach((company: ClientData) => {
    createPage({
      path: `/companies/${company["nom de l´entreprise"]}`,
      component: companyTemplate,
      context: {
        company
      }
    });
  });
};

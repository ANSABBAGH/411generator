import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { ClientData } from "../types";

interface PageTemplateProps {
  pageContext: {
    company: ClientData;
  }
}

const PageTemplate = ({pageContext: { company }}: PageTemplateProps) => {
  console.log(company)
  return (
    <Layout>
      <h1>Page Template</h1>
      {JSON.stringify(company, null, 4)}
      
    </Layout>
  )
};

export default PageTemplate;

import { graphql } from "gatsby";
import React from "react";
import { Banner } from "../components/Client/Banner"
import Layout from "../components/Layout/Layout";
import { ClientData } from "../types";

interface PageTemplateProps {
  pageContext: {
    company: ClientData;
  };
}

const PageTemplate = ({ pageContext: { company } }: PageTemplateProps) => {
  console.log(company);
  return (
    <Layout>
      <Banner
        imgUrl={
          "https://www.411sante.com/images/banners/500px/massotherapie/massotherapie-clinique-4-mains-1500.jpg"
        }
      />
      {JSON.stringify(company, null, 4)}
    </Layout>
  );
};

export default PageTemplate;

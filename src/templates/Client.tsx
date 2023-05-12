import { graphql } from "gatsby";
import React from "react";
import { Banner } from "../components/Client/Banner";
import { Content } from "../components/Client/Content";
import Layout from "../components/Layout/Layout";
import { ClientData } from "../types";

interface PageTemplateProps {
  pageContext: {
    company: ClientData;
  };
}

const PageTemplate = ({ pageContext: { company } }: PageTemplateProps) => {
  return (
    <Layout>
      <Banner
        imgUrl={
          "https://www.411sante.com/images/banners/500px/massotherapie/massotherapie-clinique-4-mains-1500.jpg"
        }
      />
      <Content company={company} />
    </Layout>
  );
};

export default PageTemplate;

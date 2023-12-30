import React from "react";
import Accordion from "../components/Accordion";
import PageTitle from "../components/PageTitle";
import data from '../utils/titles.json';

const About = () => {
  const aboutData = data.about;

  return (
    <main className="d-flex justify-content-center align-items-center my-5">
      <div className="container border border-secondary page-transparent">
        <PageTitle title={aboutData.title} content={aboutData.content} textClass=""/>
        <Accordion />
      </div>
    </main>
  );
};

export default About;

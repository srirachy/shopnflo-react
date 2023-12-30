import React from 'react';
import PageTitle from '../components/PageTitle';
import Carousel from '../components/Carousel';
import data from '../utils/titles.json';
import carousel from '../utils/carousels.json'

const Home = () => {
  const homeData = data.home;
  const carouselData = carousel.data;
  return (
    <main className="d-flex justify-content-center align-items-center my-5">
      <div className="container border border-secondary page-transparent">
        <PageTitle title={homeData.title} content={homeData.content} textClass="text-lg-start"/>
        <div className="container mb-5">
          <Carousel data={carouselData} />
        </div>
      </div>
    </main>
  );
};
 
export default Home;
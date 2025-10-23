import React from 'react';
import HeroSlider from '../Header/HeroSlider';
import PopularServices from '../pages/PopularServices';

import WinterCareTips from '../pages/WinterCareTips';
import ExpertsVets from '../pages/ExpertsVets';
import Testimonials from '../pages/Testimonials';

const Home = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <HeroSlider></HeroSlider>
      <PopularServices></PopularServices>
      <WinterCareTips></WinterCareTips>
      <Testimonials></Testimonials>
      <ExpertsVets></ExpertsVets>
    </div>
  );
};

export default Home;

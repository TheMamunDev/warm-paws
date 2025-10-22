import React from 'react';
import HeroSlider from '../Header/HeroSlider';
import PopularServices from '../pages/PopularServices';

import WinterCareTips from '../pages/WinterCareTips';
import ExpertsVets from '../pages/ExpertsVets';

const Home = () => {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === 'loading';
  // console.log(isLoading);
  // if (isLoading) {
  //   return <div className="text-center mt-10">Loading...</div>;
  // }
  return (
    <div className="max-w-11/12 mx-auto">
      <HeroSlider></HeroSlider>
      <PopularServices></PopularServices>
      <WinterCareTips></WinterCareTips>
      <ExpertsVets></ExpertsVets>
    </div>
  );
};

export default Home;

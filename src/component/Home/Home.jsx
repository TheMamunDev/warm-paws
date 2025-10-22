import React from 'react';
import HeroSlider from '../Header/HeroSlider';
import PopularServices from '../pages/PopularServices';
import { useNavigation } from 'react-router';

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
    </div>
  );
};

export default Home;

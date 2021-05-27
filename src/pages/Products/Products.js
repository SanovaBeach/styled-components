import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
  return (
    <React.Fragment>
      <Pricing />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </React.Fragment>
  );
};

export default Home;

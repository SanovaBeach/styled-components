import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
  return (
    <React.Fragment>
      <InfoSection {...homeObjFour} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
    </React.Fragment>
  );
};

export default Home;

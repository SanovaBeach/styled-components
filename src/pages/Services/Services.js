import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
  return (
    <React.Fragment>
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjFour} />
    </React.Fragment>
  );
};

export default Home;

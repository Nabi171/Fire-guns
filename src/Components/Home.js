import React from 'react';
import Button from '@restart/ui/esm/Button';
import Guns from './Guns/Guns';
import Tophome from './Tophome';

const Home = () => {
    return (
        <div className='container' >
          <Tophome></Tophome>
            <br/>
            <Guns></Guns>
        </div>
    );
};

export default Home;
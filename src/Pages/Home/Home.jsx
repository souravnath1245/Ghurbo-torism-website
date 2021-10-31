import React from 'react';
import Adventure from './Adventure';
import Banner from './Banner';
import Contact from './Contact';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Service />
            <Adventure/>
            <Contact/>

            
        </div>
    );
};

export default Home;
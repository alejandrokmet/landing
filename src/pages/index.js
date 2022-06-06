import React from 'react';
import Carousel from '../components/carousel/Carousel';
import "../css/styles.css";

const Index = () => {
  return (
    <section className ='index'> 
      <div class
       style={{
          display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
          height: '90vh'
      }}
      
    >
      <Carousel/>
      <h1>Inicio</h1>
    </div>
    </section>
  );
};

export default Index;

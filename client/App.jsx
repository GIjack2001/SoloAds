import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AdCreator from './components/AdCreator';

import Header from './components/Header';
import Overview from './components/Overview';
import Footer from './components/Footer';

import './styles.css';

const App = (props) => {
  return (
    <div className='router'>
      <Header />
      <Overview />
      <AdCreator />
      <Footer />
    </div>
  );
};

export default App;

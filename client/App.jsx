import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Overview from './components/Overview';

import './styles.css';

const App = (props) => {
  return (
    <div className='router'>
      <Header />
      <Overview />
    </div>
  );
};

export default App;

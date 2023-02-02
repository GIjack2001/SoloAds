import React, { Component } from 'react';

function Header(props) {
  return (
    <div className='header'>
      <img
        className='logo'
        src='http://localhost:3000/client/logo-no-background.svg'
      ></img>
      <div className='verticalWrap'>
        <h1>Welcome Vincent !</h1>
        <p className='tagline'>Creating ads can be your solo project!</p>
      </div>
    </div>
  );
}
export default Header;

import React, { Component } from 'react';

function AdPreview(props) {
  return (
    <div id='createdAd' className='createAd' style={props.info}>
      <span style={{ fontSize: 'xx-large', margin: '20px' }}>
        {props.title}
      </span>
      <br />
      <span
        style={{ fontSize: 'x-large', margin: '20px', fontFamily: props.SHL }}
      >
        {props.sh}
      </span>
      <br />
      <br />
      <a href={props.link} target='_blank'>
        <button
          style={{ backgroundColor: props.btnbg, fontFamily: props.btnft }}
        >
          {props.CTA}
        </button>
      </a>
    </div>
  );
}
export default AdPreview;

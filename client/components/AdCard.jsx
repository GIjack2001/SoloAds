import React from 'react';

const AdCard = ({ info, openModal }) => {
  const {
    _id,
    title,
    description,
    width,
    height,
    BG_type,
    BG_color,
    BG_image,
    HL_font_family,
    headline,
    SHL_font_family,
    sub_headline,
    CTA,
    CTA_font_family,
    CTA_BG_color,
    CTA_font_color,
    CTA_link,
    author_id,
  } = info;
  console.log(info);
  return (
    <article
      className='card charCard'
      style={{
        backgroundColor: info['BG-color'],
      }}
    >
      <div className='charHeadContainer'>
        <h3 className='charName'>{title}</h3>
      </div>
      <ul className='charDetailsList'>
        <li className='charDetail'>Description: {description}</li>
      </ul>
    </article>
  );
};

export default AdCard;

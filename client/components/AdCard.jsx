import React from 'react';
import Overview from './Overview';

const AdCard = ({ info, openModal }) => {
  const deleteAd = (id) => {
    fetch(`/api/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => Overview.refresh())
      .catch((err) => console.log('adCreator fetch /api/delete: ERROR: ', err));
  };

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
      className='charCard'
      style={{
        backgroundColor: info['BG-color'],
        backgroundImage: 'url("' + info['BG-image'] + '")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: info['CTA-FONT-color'],
      }}
    >
      <div className='charHeadContainer'>
        <h3 className='charName'>{title}</h3>
      </div>
      <ul className='charDetailsList'>
        <li className='charDetail'>Description: {description}</li>
      </ul>
      <div className='hidden-child-wrapper'>
        <div className='hidden-child-green'>
          <img
            className='icons'
            src='http://localhost:3000/client/icons8-pencil-drawing-64.png'
          ></img>
        </div>
        <div
          className='hidden-child-red'
          onClick={() => {
            deleteAd(_id);
            window.location.reload(false);
          }}
        >
          <img
            className='icons'
            src='http://localhost:3000/client/icons8-trash-can-64.png'
          ></img>
        </div>
      </div>
    </article>
  );
};

export default AdCard;

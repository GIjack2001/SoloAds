import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const htmlVal = '';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
    getHtml();
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const AdCreator = (props) => {
  const [title, titleOnChange] = useInput('');
  const [description, descriptionOnChange] = useInput('');
  //const [width, widthYearOnChange] = useInput('');
  const [height, heightOnChange] = useInput('');
  //   const [BG_type, BGTypeOnChange] = useInput('');
  const [BG_color, BGColorOnChange] = useInput('');
  //   const [BG_image, BGImageOnChange] = useInput('');
  const [HL_font_family, HLFontFamilyOnChange] = useInput('');
  const [headline, headlinOnChange] = useInput('');
  //   const [SHL_font_family, SHLFontFamilyOnChange] = useInput('');
  //   const [sub_headline, subHeadlineOnChange] = useInput('');
  //   const [CTA, CTAOnChange] = useInput('');
  //   const [CTA_font_family, CTAFontFamilyOnChange] = useInput('');
  //   const [CTA_BG_color, CTABGColorOnChange] = useInput('');
  //   const [CTA_font_color, CTAFontColorOnChange] = useInput('');
  //   const [CTA_link, CTALinkOnChange] = useInput('');
  const [nameError, setNameError] = useInput('');
  const [heightError, setHeightError] = useInput('');

  const saveAd = () => {
    // check if name is empty
    if (title === '') {
      setNameError('required');
      // check if height is not a number
    } else if (HL_font_family === '') {
      setNameError('font required');
    } else if (isNaN(height)) {
      setHeightError('must be a number');
    } else {
      const body = {
        title,
        description,
        // width,
        height,
        // BG_type,
        // BG_color,
        // BG_image,
        HL_font_family,
        headline,
        // SHL_font_family,
        // sub_headline,
        // CTA,
        // CTA_font_family,
        // CTA_BG_color,
        // CTA_font_color,
        // CTA_link,
        // author_id,
      };
      fetch('/api/createad', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify(body),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) =>
          console.log('adCreator fetch /api/createad: ERROR: ', err)
        );
    }
  };

  // useEffect to clear nameError when `name` is changed
  //   useEffect(() => {
  //     setNameError(null);
  //   }, [title]);

  //   // useEffect to clear heightError when `height` is changed
  //   useEffect(() => {
  //     setHeightError(null);
  //   }, [height]);

  return (
    <section className='mainSection createCharContainer'>
      <header className='pageHeader'>
        <h2>Ad Creator</h2>
      </header>
      <article className='card_createad'>
        <div className='verticalWrapleft'>
          <h3>Enter your character details</h3>
          <div className='createCharFields'>
            <label htmlFor='title'>Title: </label>
            <input
              id='Title'
              name='Title'
              placeholder='Give your ad a name'
              value={title}
              onChange={titleOnChange}
            />
            {nameError ? <span className='errorMsg'>{nameError}</span> : null}
          </div>
          <div className='createCharFields'>
            <label htmlFor='description'>Description: </label>
            <input
              name='description'
              placeholder='Write a short description for your ad'
              value={description}
              onChange={descriptionOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='BG_color'>Background Color: </label>
            <input
              name='BG_color'
              placeholder='#5C2D91'
              value={BG_color}
              onChange={BGColorOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='HL_font_family'>Headline Font Family: </label>
            <input
              name='HL_font_family'
              placeholder='Arial'
              value={HL_font_family}
              onChange={HLFontFamilyOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='height'>Height: </label>
            <input
              name='height'
              placeholder='180'
              value={height}
              onChange={heightOnChange}
            />
            {heightError ? (
              <span className='errorMsg'>{heightError}</span>
            ) : null}
          </div>
          <div className='createAdButtonContainer'>
            <button
              type='button'
              className='btnMain'
              value='save'
              onClick={saveAd}
            >
              Save
            </button>
          </div>
        </div>
        <div
          id='createdAd'
          style={{
            backgroundColor: BG_color,
            height: height + 'px',
            width: '100px',
            fontFamily: HL_font_family,
          }}
        >
          {title}
        </div>
      </article>
      <div className='codeDisplay'>{htmlVal}</div>
    </section>
  );
};

export default AdCreator;

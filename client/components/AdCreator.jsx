import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import AdPreview from './AdPreview';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
let htmlVal = '';
let previewVals = {};
let temptitle = undefined;
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
    htmlVal = renderToString(
      <AdPreview info={previewVals} title={temptitle} />
    );
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const AdCreator = (props) => {
  const [title, titleOnChange] = useInput('');
  const [description, descriptionOnChange] = useInput('');
  const [width, widthOnChange] = useInput('');
  const [height, heightOnChange] = useInput('');
  const [BG_type, BGTypeOnChange] = useInput('');
  const [BG_color, BGColorOnChange] = useInput('');
  const [BG_image, BGImageOnChange] = useInput('');
  const [HL_font_family, HLFontFamilyOnChange] = useInput('');
  const [headline, headlineOnChange] = useInput('');
  const [SHL_font_family, SHLFontFamilyOnChange] = useInput('');
  const [sub_headline, subHeadlineOnChange] = useInput('');
  const [CTA, CTAOnChange] = useInput('');
  const [CTA_font_family, CTAFontFamilyOnChange] = useInput('');
  const [CTA_BG_color, CTABGColorOnChange] = useInput('');
  const [CTA_font_color, CTAFontColorOnChange] = useInput('');
  const [CTA_link, CTALinkOnChange] = useInput('');
  const [author_id, authorIdOnChange] = useInput('');
  const [nameError, setNameError] = useInput('');
  const [heightError, setHeightError] = useInput('');

  const saveAd = () => {
    // check if name is empty
    if (title === '') {
      setNameError('required');
      // check if height is not a number
    } else if (isNaN(height)) {
      setHeightError('must be a number');
    } else {
      const body = {
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
  previewVals = {
    backgroundColor: BG_color,
    height: height + 'px',
    width: width + 'px',
    fontFamily: HL_font_family,
    backgroundImage: `url(${BG_image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: CTA_font_color,
    overflow: 'hidden',
  };
  temptitle = headline;
  return (
    <section className='mainSection createCharContainer'>
      <header className='pageHeader'>
        <h2>Ad Creator</h2>
      </header>
      <article className='card_createad'>
        <div className='verticalWrapleft'>
          <h3>Define the properties of your app:</h3>
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
            <label htmlFor='BG_type'>Background type: </label>
            <input
              name='BG_type'
              placeholder='Arial'
              value='Solid'
              onFocus={BGTypeOnChange}
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
            <label htmlFor='BG_image'>Background image: </label>
            <input
              name='BG_image'
              placeholder='(Optional) https://testurl.com/image.png'
              value={BG_image}
              onChange={BGImageOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='CTA_font_color'>Font Color: </label>
            <input
              name='CTA_font_color'
              placeholder='Blue'
              value={CTA_font_color}
              onChange={CTAFontColorOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='headline'>Headline: </label>
            <input
              name='headline'
              placeholder='Test headline'
              value={headline}
              onChange={headlineOnChange}
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
            <label htmlFor='sub_headline'>Sub-Headline: </label>
            <input
              name='sub_headline'
              placeholder='Sub-Headline'
              value={sub_headline}
              onChange={subHeadlineOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='SHL_font_family'>Sub-Headline Font Family: </label>
            <input
              name='SHL_font_family'
              placeholder='Arial'
              value={SHL_font_family}
              onChange={SHLFontFamilyOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='CTA'>CTA: </label>
            <input
              name='CTA'
              placeholder='Your Call To Action'
              value={CTA}
              onChange={CTAOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='CTA_font_family'>CTA Font Family: </label>
            <input
              name='CTA_font_family'
              placeholder='Arial'
              value={CTA_font_family}
              onChange={CTAFontFamilyOnChange}
            />
          </div>
          <div className='createCharFields'>
            <label htmlFor='CTA_BG_color'>CTA Background color: </label>
            <input
              name='CTA_BG_color'
              placeholder='#fff'
              value={CTA_BG_color}
              onChange={CTABGColorOnChange}
            />
          </div>

          <div className='createCharFields'>
            <label htmlFor='CTA_link'>CTA Link: </label>
            <input
              name='CTA_link'
              placeholder='https://www.codesmith.io/'
              value={CTA_link}
              onChange={CTALinkOnChange}
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
          <div className='createCharFields'>
            <label htmlFor='width'>Width: </label>
            <input
              name='width'
              placeholder='320'
              value={width}
              onChange={widthOnChange}
            />
            {heightError ? (
              <span className='errorMsg'>{heightError}</span>
            ) : null}
          </div>
          <div className='createCharFields'>
            <label htmlFor='author_id'>Author ID: </label>
            <input
              name='author_id'
              placeholder='Arial'
              value='1'
              onFocus={authorIdOnChange}
            />
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
        <AdPreview
          info={previewVals}
          title={headline}
          sh={sub_headline}
          btnbg={CTA_BG_color}
          btnft={CTA_font_family}
          CTA={CTA}
          link={CTA_link}
          SHL={SHL_font_family}
        />
      </article>
      <div className='codeDisplay'>{htmlVal}</div>
    </section>
  );
};

export default AdCreator;

import React from 'react';
import clsx from 'clsx';

import {CompareImages} from './CompareImages';
import {ContactMe} from './ContactMe';

import './App.css';
import beach from './beach.jpg';
import camp from './camp.jpg';
import kitchenNew from './kitchen_new.jpg';
import kitchenOld from './kitchen_old.jpg';
import remyMotorcycle from './remy_motorcycle.jpg';
import remyOcean from './remy_ocean.jpg';
import remyPinkCircle from './remy_circle_pink.png';
import painting from './painting.jpg';

function App() {
  const content = [{
    text: 'I like to build things in the digital and physical space.',
    compareOld: kitchenOld,
    compareNew: kitchenNew,
    alt: 'Before and after kitchen photos.',
  }, {
    text: 'I\'m a Marin native and reside in SF',
    imgSrc: painting,
    alt: 'In an alley in the Mission, SF'
  }, {
    text: 'I love music and the beach.',
    imgSrc: beach,
    alt: 'Somewhere in Point Reyes.',
  }, {
    text: 'I\'m an avid backpacker, but don\'t like hiking. And I like to travel, but hate airplanes in economy class.',
    imgSrc: camp,
    pano: false,
    alt: 'My campsite in Lake Anna.',
  }, {
    text: 'I love vehicles with two wheels (including bicycles).',
    imgSrc: remyMotorcycle,
    alt: 'Motorcycling with my dog and girlfriend. Photocred: https://www.instagram.com/carlson_max/'
  }, {
    text: 'Also I have a dog. His name is Remy. Named after the most recent place we visited internationally after adopting him.',
    imgSrc: remyOcean,
    alt: 'Remy at Fort Funston, San Francisco.',
  }, ];

  return (
    <div className='mattgoo'>
      <Header />
      <div className='container'>
        {content.map(({text, imgSrc, alt, compareOld, compareNew}, index) => {
          const paragraphId = `${index}Paragraph`;
          const gridItemClass = clsx('container__item', {'container__item--alt': index % 2 === 0});
          const isComparison = compareOld && compareNew;
          return (
            <React.Fragment key={index}>
              <div className={clsx(gridItemClass, 'container--space')}>
                {isComparison ? (
                  <CompareImages
                    oldPhoto={compareOld!}
                    newPhoto={compareNew!}
                    text={text}
                  />
                ) : null}
                {imgSrc ? (<img
                  src={imgSrc}
                  className='container__img'
                  aria-describedby={paragraphId}
                  alt={alt}
                />) : null}
                {isComparison ? null : (<p id={paragraphId} className='container__text'>
                  {text}
                </p>)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <ContactMe />
    </div>
  );
}

function Header() {
  return (
    <div className='container__header'>
      <img src={remyPinkCircle} alt='logo' />
      <h1>
        hola, mi llamo <span className='text-highlight'>Matt Goo</span>
      </h1>
    </div>
  );
}
export default App;

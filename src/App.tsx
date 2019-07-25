import React from 'react';
import clsx from 'clsx';

import {CompareImages} from './CompareImages';
import {ContactMe} from './ContactMe';

import './App.css';
import beach from './images/beach.jpeg';
import beachSm from './images/dist/beach-sm.jpeg';
import beachMd from './images/dist/beach-md.jpeg';
import beachLg from './images/dist/beach-lg.jpeg';
import camp from './images/camp.jpeg';
import campSm from './images/dist/camp-sm.jpeg';
import campMd from './images/dist/camp-md.jpeg';
import campLg from './images/dist/camp-lg.jpeg';
import kitchenNewLg from './images/dist/kitchen_new-lg.jpeg';
import kitchenOldLg from './images/dist/kitchen_old-lg.jpeg';
import remyMotorcycle from './images/remy_motorcycle.jpeg';
import remyMotorcycleSm from './images/dist/remy_motorcycle-sm.jpeg';
import remyMotorcycleMd from './images/dist/remy_motorcycle-md.jpeg';
import remyMotorcycleLg from './images/dist/remy_motorcycle-lg.jpeg';
import remyOcean from './images/remy_ocean.jpeg';
import remyOceanSm from './images/dist/remy_ocean-sm.jpeg';
import remyOceanMd from './images/dist/remy_ocean-md.jpeg';
import remyOceanLg from './images/dist/remy_ocean-lg.jpeg';
import remyPinkCircle from './images/remy_circle_pink.png';
import painting from './images/painting.jpeg';
import paintingSm from './images/dist/painting-sm.jpeg';
import paintingMd from './images/dist/painting-md.jpeg';
import paintingLg from './images/dist/painting-lg.jpeg';

function App() {
  const content = [{
    text: 'I like to build things in the digital and physical space.',
    compareOld: kitchenOldLg,
    compareNew: kitchenNewLg,
    alt: 'Before and after kitchen photos.',
  }, {
    text: 'I\'m a Marin native and reside in SF',
    imgSrc: painting,
    imgSrcSm: paintingSm,
    imgSrcMd: paintingMd,
    imgSrcLg: paintingLg,
    alt: 'In an alley in the Mission, SF'
  }, {
    text: 'I love music and the beach.',
    imgSrc: beach,
    imgSrcSm: beachSm,
    imgSrcMd: beachMd,
    imgSrcLg: beachLg,
    alt: 'Somewhere in Point Reyes.',
  }, {
    text: 'I\'m an avid backpacker, but don\'t like hiking. And I like to travel, but hate airplanes in economy class.',
    imgSrc: camp,
    imgSrcSm: campSm,
    imgSrcMd: campMd,
    imgSrcLg: campLg,
    pano: false,
    alt: 'My campsite in Lake Anna.',
  }, {
    text: 'I love vehicles with two wheels (including bicycles).',
    imgSrc: remyMotorcycle,
    imgSrcSm: remyMotorcycleSm,
    imgSrcMd: remyMotorcycleMd,
    imgSrcLg: remyMotorcycleLg,
    alt: 'Motorcycling with my dog and girlfriend. Photocred: https://www.instagram.com/carlson_max/'
  }, {
    text: 'Also I have a dog. His name is Remy. Named after the most recent place we visited internationally after adopting him.',
    imgSrc: remyOcean,
    imgSrcSm: remyOceanSm,
    imgSrcMd: remyOceanMd,
    imgSrcLg: remyOceanLg,
    alt: 'Remy at Fort Funston, San Francisco.',
  }, ];

  return (
    <div className='mattgoo'>
      <Header />
      <div className='container'>
        {content.map(({text, imgSrc, imgSrcSm, imgSrcMd, imgSrcLg, alt, compareOld, compareNew}, index) => {
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
                {imgSrc ? (
                  <picture>
                    <source
                      srcSet={imgSrcSm}
                      media='(max-width: 599px)'
                    />
                    <source
                      srcSet={imgSrcMd}
                      media='(min-width: 600px) and (max-width: 1199px)'
                    />
                    <source
                      srcSet={imgSrcLg}
                      media='(min-width: 1200px)'
                    />
                    <img
                      className='container__img'
                      src={imgSrc}
                      aria-describedby={paragraphId}
                      alt={alt}
                    />
                  </picture>
                ) : null}
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

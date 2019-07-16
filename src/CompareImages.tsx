import React, {useEffect} from 'react';
import ComparisonSlider from 'comparison-slider';
import './Comparison.css';

interface Props {
  oldPhoto: string;
  newPhoto: string;
  className?: string;
  text: string;
};

export const CompareImages = (props: Props) => {
  useEffect(() => {
    new ComparisonSlider();
  }, []);

  return (
    <div className='comparison__container'>
      <div className='ComparisonSlider'>
        <div
          className='ComparisonSlider__Before'
          style={{
            backgroundImage: `url(${props.oldPhoto})`}}
        ></div>
        <div
          className='ComparisonSlider__After'
          style={{
            backgroundImage: `url(${props.newPhoto})`}}
        ></div>
      </div>
      <p className='comparison__text'>
        {props.text}
      </p>
    </div>
  );
}
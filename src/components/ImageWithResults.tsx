import React from 'react';
import './ImageWithResults.css';

interface iImageWithResultsProps {
  imageUrl: string;
  resultsArr: string[];
}

const ImageWithResults: React.FC<iImageWithResultsProps> = ({
  imageUrl,
  resultsArr,
}) => {
  return (
    <div className='image-with-results-wrapper'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='image-results-wrapper'>
        <div className='image-results'>
          {resultsArr.map((item, index) => (
            <p key={index} className='image-object-name'>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageWithResults;

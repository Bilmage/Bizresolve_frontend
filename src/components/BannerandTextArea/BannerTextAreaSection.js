import React from 'react';
import { Banner } from './Banner'; // Import the Banner component
import { TextArea } from './TextArea'; // Import the TextArea component


export const BannerTextAreaSection = ({style}) => {
  return (
    <div className="container" style={style}>
      <TextArea style={style} />
      <Banner style={style} />
      
      
    </div>
  );
};

export default BannerTextAreaSection;

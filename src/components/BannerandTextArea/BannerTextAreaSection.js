import React from 'react';
import { Banner } from './Banner'; 
import { TextArea } from './TextArea'; 


export const BannerTextAreaSection = ({style}) => {
  return (
    <div className="container" style={style}>
      <TextArea style={style} />
      <Banner style={style} />
      
      
    </div>
  );
};

export default BannerTextAreaSection;

import React from 'react';
import { BusinessLeft } from './BusinessLeftSection'; // Import the Banner component
import { BusinessRight } from './BusinessRightSection'; // Import the TextArea component




export const BusinessSection = ({style}) => {
  return (
    <div className="container" style={style}>
      <BusinessLeft style={style} />
      <BusinessRight style={style} />
     
      
    </div>
  );
};

export default BusinessSection;
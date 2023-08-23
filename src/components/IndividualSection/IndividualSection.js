import React from "react";
import { IndividualRight } from './IndividualRightSection';
import { Individualleft } from './IndividualLeftSection';



export const IndividualSection = ({ style }) => {
  return (
    <div className="container" style={style}>

      <Individualleft style={style} />
      <IndividualRight style={style} />

    </div>
  );
};

export default IndividualSection;
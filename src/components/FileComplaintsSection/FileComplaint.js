import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import FormLabel from "@mui/material/FormLabel";

import "./filecomplaint.css";

export const FileComplaint = ({ className }) => {
  const [value, setValue] = React.useState("option1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
    
    <div className={`file-complaint ${className}`}>
      
        <div className="div">
          <div className="sub-headline">
            <h1 className="text-wrapper">File a complaint</h1>
          </div>
          <div className="div-2">
            <p className="paragraph">
              Bizresolve welcomes the opportunity to assist you with your market
              place challenge. Whether you need to file a complaint, post a
              review, tell us about a misleading advertisement, or report a
              scam, you&#39;re in the right place. There are some disputes Bizresolve cannot help with, You can view those <Link to="#"><strong style={{color: '#F78431', textDecoration: 'underline'}}>here</strong></Link>
            </p>
          </div>
        </div>
        <div className="container">
        <FormControl style={{ marginLeft: "20px", fontFamily: "Inter-Regular", color: '#a95b1f' }}>
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="I&#39;d like to file a complaint against a business, and have Bizresolve help me get a resolution to my problem."
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="I&#39;d like to share an experience about a business."
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label="I&#39;d like to warn others about a business or offer that sounds like a fraud."
            />
            <FormControlLabel
              value="option4"
              control={<Radio />}
              label="I&#39;d like to file a complaint about a warranty dispute for a vehicle."
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
    </div>
  );
};

export default FileComplaint;

import React from "react";
import "./textarea.css";
import { Link } from "react-router-dom";
import { FaPaperPlane } from 'react-icons/fa';
import Button from "../Button/Button";

export const TextAreaField = ({ className }) => {
  return (
    <div className="container-fluid">
      <div className="col-lg-4">
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Leave a comment..."
            required=""
            rows="3">

          </textarea>
        </div>
      </div>
      <div style={{justifyContent: 'center'}}>
        <Link to="#">
          <Button text="Submit" icon={FaPaperPlane}></Button>
        </Link>
      </div>
    </div>


  );
};
export default TextAreaField;

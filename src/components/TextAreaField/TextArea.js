import React from "react";
import "./textarea.css";
import Button from "../Button/Button";

export const TextAreaField = ({ className }) => {
  return (
    <div className="container">
      <div class="col-lg-6">
        <div class="form-group">          
          <textarea 
          class="form-control" 
          placeholder="Leave a comment..." 
          required="" 
          rows="3">
            
          </textarea>         
        </div>
      </div>
      <div> {/* Center the button */}
            <Button />
          </div>      
    </div>

    
  );
};
export default TextAreaField;

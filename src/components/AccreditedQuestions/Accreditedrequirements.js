import React, { useState } from "react";
import "./accredited.css";

export const Accredited = ({ className }) => {
  const [checked, setChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  });

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  return (
    <div className={`container ${className}`}>
      <form>
        <fieldset>
          <legend>Criteria:</legend>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked.option1}
              onChange={handleChange}
              name="option1"
            />
            You have been in business for the past six months
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked.option2}
              onChange={handleChange}
              name="option2"
            />
            You have the required bonding and licenses in your jurisdictions
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked.option3}
              onChange={handleChange}
              name="option3"
            />
            You have no unresolved customer complaints
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked.option4}
              onChange={handleChange}
              name="option4"
            />
            You have no governmental ethics violations
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked.option5}
              onChange={handleChange}
              name="option5"
            />
            You fulfill contracts and promises made through business practices and advertising
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked.option6}
              onChange={handleChange}
              name="option6"
            />
            You follow governmental and Bizresolves advertising laws and codes
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked.option7}
              onChange={handleChange}
              name="option7"
            />
            Your website provides and follows a privacy policy and uses secure financial transactions (if applicable)
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default Accredited;

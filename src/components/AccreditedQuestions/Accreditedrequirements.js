import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import BottomNav from "../BottomNav/BottomNav";
import "./accredited.css";

export const Accredited = ({ className }) => {
  const [checked, setChecked] = React.useState({
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

  const labelStyleForOption1 = { color: "#a95b1f" };

  return (
    <>
      <div className="container">
        <FormControl>
          <FormLabel id="demo-controlled-checkbox-group">Criteria:</FormLabel>
          <FormGroup aria-labelledby="demo-controlled-checkbox-group">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.option1}
                  onChange={handleChange}
                  name="option1"
                />
              }
              label="You have been in business for the past six months"
              style={labelStyleForOption1}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.option2}
                  onChange={handleChange}
                  name="option2"
                />
              }
              label="You have the required bonding and licenses in your jurisdictions"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.option3}
                  onChange={handleChange}
                  name="option3"
                />
              }
              label="You have no unresolved customer complaints"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.option4}
                  onChange={handleChange}
                  name="option4"
                />
              }
              label="You have no governmental ethics violations"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.option5}
                  onChange={handleChange}
                  name="option5"
                />
              }
              label="You fulfill contracts and promises made through business practices and advertising"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.option6}
                  onChange={handleChange}
                  name="option6"
                />
              }
              label="You follow governmental and Bizresolves advertising laws and codes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.option7}
                  onChange={handleChange}
                  name="option7"
                />
              }
              label="Your website provides and follows a privacy policy and uses secure financial transactions (if applicable)"
            />
          </FormGroup>
        </FormControl>
      </div>

      <div >
        <BottomNav backPath="#" nextPath="#" />
      </div>
    </>
  );
};

export default Accredited;

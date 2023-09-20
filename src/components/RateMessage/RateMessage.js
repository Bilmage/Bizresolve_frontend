import React from "react";

import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Profile1 from "../../assets/images/Profilepic1.png";
import { Link } from "react-router-dom";
import "./rate.css";

export const RateMessage = ({ className }) => {
  return (
    <div className="container">
      <div className={`rate-message ${className}`}>
        <div style={{ alignItems: 'center', textAlign: 'center' }}>

          <label htmlFor="logoInput">
            {Profile1 ? (
              <img src={Profile1} alt="Profile" style={{ width: '100px', height: '100px' }} />
            ) : (
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main', cursor: 'pointer' }}>
                <LockOutlinedIcon />
              </Avatar>
            )}
            <input
              accept=".png, .jpg, .jpeg"
              id="logoInput"
              type="file"
              style={{ display: 'none' }}
            />
          </label>
        </div>

        <h1 className="rate-your-experience">Rate your experience with us</h1>
        <p className="are-you-satisfied">Are you satisfied with our service ?</p>
        <p className="additionally-you-ll">
          <span className="text-wrapper">
            Alternatively you can Search for another business by clicking {" "}
            <Link to="/search">  <strong style={{ textDecoration: "underline", color: '#F78431' }}>
              here
            </strong></Link>
          </span>

        </p>

      </div>
    </div>

  );
};
export default RateMessage;
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Profile from "../../assets/images/Profilepic1.png";
import HeartIcon from "../../assets/icons/Heart.svg";
import Eye from "../../assets/icons/Redeye.svg"
import "./popular.css";

export const Popular = ({ className }) => {
    return (
        <div className="container-fluid">
        <div className={`popular ${className}`}>
            <div className="profile">
                <div className="div">
                    <img className="image" alt="Img" src={Profile } />
                    <div className="title">
                        <div className="name">
                            <div className="text-wrapper">Safaricom</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="state">
                <div className="text-wrapper-2">Accredited</div>
            </div>
            <div className="new">
                <div className="new-2">
                    <img className="heart" alt="Heart" src={HeartIcon} />
                    <div className="text-wrapper-3">New</div>
                </div>
            </div>
            <div>
            <Link to="/businessregistration">
              <Button text="Register your Business" icon={faPlus}></Button>
            </Link>
          </div>
          <div>
            <Link to="/businessregistration">
              <Button text="Register your Business" icon={faPlus}></Button>
            </Link>
          </div>
            <img className="description" alt="Description" src={Eye} />
        </div>
        </div>
    );
};
export default Popular;
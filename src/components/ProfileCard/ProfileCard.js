import React from "react";
import { PropertyDefault } from "./PropertyDefault";
import { TypeGroup } from "./TypeGroup";
import "./style.css";

export const ProfileTile = () => {
    return (
        <div className="container">
        <div className="profile-tile">
            <img className="image" alt="Image" src="image.png" />
            <div className="name">
                <div className="div">Safaricom</div>
                <div className="text-wrapper-2">Telecommunications Company</div>
            </div>
            <div className="followers">
                <TypeGroup className="type-group" />
                <div className="text-wrapper-3">99 Reviews</div>
            </div>
            <PropertyDefault />
        </div>
        </div>
    );
};
export default ProfileTile;
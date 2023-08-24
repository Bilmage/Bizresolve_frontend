import React from "react";
import bannerImage from '../../assets/images/TMT.png';
import './banner.css';


export const Banner = ({ banner }) => {
    return (
        <div className="container">
        <div
            className="banner"
            style={{
                ...{
                    backgroundImage: `url(${bannerImage})`,
                },
                ...banner,
            }}
        />
        </div>
    );
};
export default Banner;
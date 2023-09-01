import React, { useRef, useEffect } from "react";
import anime from "animejs";
import bannerImage from '../../assets/images/TMT.png';
import './banner.css';

export const Banner = ({ banner }) => {
    const bannerRef = useRef(null);

    useEffect(() => {
        const bannerElement = bannerRef.current;

        anime({
            targets: bannerElement,
            translateX: [100, 0], // Slide in from the right
            duration: 1000,
            easing: "easeInOutQuad",
        });
    }, []);

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
                ref={bannerRef}
            />
        </div>
    );
};

export default Banner;

import React, { useRef, useEffect } from "react";
import anime from "animejs";
import './banner.css';

export const TextArea = ({ banner }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Get a reference to the container element
        const container = containerRef.current;

        // Set up the animation
        anime({
            targets: container,
            translateX: [-100, 0], // Slide in from the left
            duration: 1000,
            easing: "easeInOutQuad",
        });
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <div className="text-area" style={banner}>
                <div className="title-c">
                    <div className="headline-c">
                        <div className="become-a-successful">Become a successful</div>
                    </div>
                </div>
                <div className="headline-c-wrapper">
                    <div className="business-wrapper">
                        <div className="business">Business</div>
                    </div>
                </div>
                <div className="description">
                    <p className="paragraph">
                        We are dedicated to assisting businesses in Kenya in effectively managing complaints and delivering solutions
                        that cater to their customers&#39; needs. Our primary objective is to become a reliable partner for
                        businesses, offering expert advice and support to facilitate the resolution of complaints in a prompt and
                        professional manner.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TextArea;

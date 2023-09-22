import React from "react";
import './profile.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";




export default function ProfileBanner() {


    return (
        <>
            <div className='container'>
                <main>
                    <div className="jumbo" />
                    <br /><br />

                    <div className="container icons">
                        <div className="big-icon" />
                        <div className="rate">
                            <Link to="#">
                                <FontAwesomeIcon

                                    icon={faStar}
                                    className="star-icon"
                                    style={{ color: "#F78431" }}
                                />

                            </Link>&nbsp; &nbsp; 
                            <Link to="#">
                                <FontAwesomeIcon

                                    icon={faFolderPlus}
                                    className="star-icon"
                                    style={{ color: "#F78431" }}
                                />

                            </Link>&nbsp; &nbsp; 
                            <Link to="#">
                                <FontAwesomeIcon

                                    icon={faThumbsUp}
                                    className="star-icon"
                                    style={{ color: "#F78431" }}
                                />

                            </Link>&nbsp; &nbsp; 
                        </div>
                        <div className="add">
                         
                        </div>
                    </div>
                    
                    <div className="details">
                        <h3>Safaricom</h3>
                        <p>Internet</p>
                    </div>
                    <div className="container bio">

                        <div className="content">
                            <div className="details">

                                <p style={{ color: '#a95b1f', fontWeight: '700px' }}>Featured Reviews</p>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis
                                fugit hic vel voluptates perferendis aut quibusdam sit omnis unde
                                aspernatur quae repellat blanditiis autem, a libero asperiores neque
                                illum aliquid est tempore. 
                            </p>
                        </div>
                        <hr />
                    </div>
                </main>
            </div>
        </>


    )
}

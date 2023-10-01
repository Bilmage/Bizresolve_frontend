import React from "react";
import './profile.css';
import safaricom from "../../assets/images/Safaricom.png";




export default function ProfileBanner() {


    return (
        <>

            <div className='container'>
                <main>
                    
                    <br /><br />

                    <div className='avatarr'>
          
          <img src={safaricom} alt="Profile" />

       
      </div>


                    <div className="details">
                        <h3>Safaricom</h3>
                        <p>Internet</p>
                    </div>
                    <div className="container bio">

                        <div className="content">
                            <div className="details">

                                <h3>About us</h3>
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

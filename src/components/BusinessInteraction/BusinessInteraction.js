import React from 'react';
import "./business.css";
import Features from "../Features/Features";
import { Link } from 'react-router-dom';
import safaricom from "../../assets/images/Safaricom.png";
import Dropbox from "../../assets/images/Dropbox logo.png"
import Eye from "../../assets/icons/Redeye.svg";
import BusinessList from '../BusinessCard/BusinessCard';
import { Navigation } from "../../components/Navigation/Navigation";
import { BizFooter } from '../../components/Footer/BizFooter';

const businessData = [
  {
    businessName: 'Safaricom',
    businessCategory: 'Internet',
    CTA1: 'File a complaint',
    CTA2: 'Leave a Review',
    logoSrc: safaricom,
  },
  {
    businessName: 'Dropbox',
    businessCategory: 'Cloud',
    CTA1: 'File a complaint',
    CTA2: 'Leave a Review',
    logoSrc: Dropbox,
  },

];

export default function BusinessInteraction() {


  return (
    <>
      <Navigation />
      <div className="container">
        <section className="main">
          <div className="main-top">
            <p className='welcome'>Hi John doe 👋 <br /><br />Welcome to your dashboard !</p>
          </div>
          <div className="main-body">
            <h1>Registered Businesses </h1>
            <div className="search_bar">
              <input type="search" placeholder="Search for a Business, charity..." />
              <select name="" id="">
                <option>Category</option>
                <option>Charity</option>
                <option>Internet provider</option>
                <option>Branding</option>
                <option>Web development</option>
              </select>
              <select className="filter">
                <option>Registered</option>
                <option>Accredited</option>
                <option>Certified</option>
              </select>
            </div>
            <div className="tags_bar">
              <div className="tag">
                <i className="fas fa-times" />
                <span>Charity</span>
              </div>
              <div className="tag">
                <i className="fas fa-times" />
                <span>Banking</span>
              </div>
              <div className="tag">
                <i className="fas fa-times" />
                <span>Internet</span>
              </div>
              <div className="tag">
                <i className="fas fa-times" />
                <span>Photography</span>
              </div>
            </div>
            <Features />
            <div className="row">
              <p>
                There are more than <span>20</span> Certified business, swipe to see more
              </p>
              {/* <Link to="#">See all</Link> */}
            </div>
            <BusinessList />
            <div className="row">
              <p>
                There are more than <span>40</span> Registered business at Biz-resolve
              </p>
              <Link to="#">See all</Link>
            </div>

            <div>
              {businessData.map((business, index) => (
                <div className="business_card" key={index}>
                  <div className="business_details">
                    <div className="img">
                      <img src={business.logoSrc} alt="Logo" />
                    </div>
                    <div className="text">
                      <h2>{business.businessName}</h2>
                      <span>{business.businessCategory}</span>
                    </div>
                  </div>
                  <div className="status">
                  <Link to="/logcomplaint">
                    <div className="tag">                      
                      <span>{business.CTA1}</span>
                    </div> 
                    </Link>
                  </div>

                  <div className="status">
                  <Link to="/ratings">
                    <div className="tag">                      
                      <span>{business.CTA2}</span>
                    </div> 
                    </Link>
                  </div>
                  <div><Link to="/profile"> {/* Specify the URL for the Eye icon */}
                    <img className="description" alt="Description" src={Eye} />
                  </Link></div>
                </div>
              ))}
            </div>

          </div>

        </section>
      </div>
      <BizFooter />
    </>

  );
}
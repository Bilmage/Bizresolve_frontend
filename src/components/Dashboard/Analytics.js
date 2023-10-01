import React from 'react';
import "./dashboard.css";
import Features from "../../components/Features/Features";
import MyAreaChart from '../Chart/Area';
import Chart from '../../components/Chart/Chart';





export default function Analytics() {


  return (
    <>
      <div className="container">
        <section className="main">
          <div className="main-top">
            <p className='welcome'>Hi John doe ! Welcome to your dashboard !</p>
          </div>
          <div className="main-body">
            <h1>Analytics</h1>
            <div className="search_bar">
              <input type="search" placeholder="Search for a Business, Charity..." />
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
                Traffic History
              </p>              
            </div>

            <div className='card'>
            <MyAreaChart /> 
            </div>
            <div className='card'>
            <Chart /> 
            </div>
          </div>
        </section>
      </div>
    </>

  );
}
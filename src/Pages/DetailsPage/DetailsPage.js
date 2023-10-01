import React, { useState } from 'react';
import "../../components/SearchMenu/search.css";
import * as FaIcons from 'react-icons/fa';
import Details from '../../components/Dashboard/Details';
import Logo from '../../assets/images/logoipsum.svg';
import { Link } from 'react-router-dom';
import profile from "../../assets/images/Profilepic1.png";
import "../../components/Dashboard/dashboard.css";
import BizFooter from '../../components/Footer/BizFooter';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>

      <div className='nav_bar'>
        <Link to='#' className={`menu-bars ${sidebarOpen ? 'close' : ''}`} onClick={toggleSidebar}>
          {sidebarOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </Link>
        <div className='nav_right'>
          <Link to='#' className='notification'>
            <i className='fas fa-bell'></i>
          </Link>
          <Link to='#' className='avatar'>
            <img src={profile} alt='Avatar' />
          </Link>
        </div>
      </div>

      <div className='flex-container'>
        <nav className={`nav-menu ${sidebarOpen ? 'active' : ''}`}>
          <div className="navbar">
            <ul className='nav-menu-items'>

              <div className="logo">
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
                <li>
                  <button className="close-button" onClick={toggleSidebar}>
                    <i className="fas fa-times"></i>
                  </button>
                </li>
              </div>
              <li>
                <Link to="/dashboard">
                  <i className="fas fa-user" />
                  <span className="nav-item">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/details">
                  <i className="fas fa-info-circle" />
                  <span className="nav-item">Details</span>
                </Link>
              </li>
              <li>
                <Link to="/analytics">
                  <i className="fas fa-chart-bar" />
                  <span className="nav-item">Analytics</span>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i className="fab fa-dochub" />
                  <span className="nav-item">Reports</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-cog" />
                  <span className="nav-item">Settings</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-question-circle" />
                  <span className="nav-item">Help</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                  <span className="nav-item">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="main">
          <Details />
          <BizFooter />
        </main>
      </div>
    </>
  )
}

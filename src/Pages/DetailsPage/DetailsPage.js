import React, { useState } from 'react';
import Logo from '../../assets/images/logoipsum.svg';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import BizFooter from '../../components/Footer/BizFooter';
import profile from "../../assets/images/Profilepic1.png";
import Details from '../../components/Dashboard/Details';

export default function DetailsPage() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>



      <div className='nav_bar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div className='nav_right'>

          <Link to='#' className='notification'>
            {/* Add your notification icon here */}
            <i className='fas fa-bell'></i>
          </Link>
          <Link to='#' className='avatar'>
            {/* Add your avatar image here */}
            <img src={profile} alt='Avatar' />
          </Link>
        </div>

      </div>
      <div className='flex-container'>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

          <div className="navbar">
            <ul className='nav-menu-items' onClick={showSidebar}>

              <div className="logo">
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
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
                <Link to="#" className="logout">
                  <i className="fas fa-sign-out-alt" />
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

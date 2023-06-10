import React from "react";
import logo from '../img/menu-alt-left-regular-24.png';
import logofondo from '../img/logo.png';
import fuego from '../img/text_Mesa de trabajo 1.png';


import '../style.css';
import '../animate.min.css';
import '../bootstrap-grid.css';
import '../bootstrap-grid.min.css';
import '../bootstrap-grid.min.css.map';
import '../bootstrap-reboot.css';
import '../bootstrap-reboot.css.map';
import '../bootstrap-reboot.min.css';
import '../bootstrap-reboot.min.css.map';
import '../bootstrap.css';
import '../bootstrap.css.map';
import '../icomoon.css';

import '../jquery-ui.css';
import '../jquery.fancybox.min.css';
import '../meanmenu.css';
import '../normalize.css';
import '../responsive.css';

const Header = () => {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  return (
    <div className="header">
      <div className="menu_sitbar">
        <ul className="menu">
          <li>
            <button type="button" onClick={openNav}>
              <img
                style={{}}
                src={logo}
                alt="#"
              />
            </button>
          </li>
        </ul>
        <ul className="social_icon">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="header_full_bg">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo">
                  <a href="index.html">
                    <img className="logoimg" src={fuego} alt="#" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="banner_text">

                  <h1>
                    De<br />
                    TodoChill
                  </h1>
                  <a className="get_btn" href="#about" role="button">
                    Menu
                  </a>
                  <a className="get_btn" href="#contact" role="button">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-7">
                <img className="bann_img" src={logofondo} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

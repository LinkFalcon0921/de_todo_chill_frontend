import React from "react";
import logo2 from '../img/logo.png'
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
const Footer =()=>{
    return(
        <>
       <footer >
         <div className="footer">
            <div className="daih_bg">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <ul className="conta">
                           <li><i className="fa fa-phone" aria-hidden="true"></i> Call Now  +1 849-357-2488</li>
                           <li><i className="fa fa-map-marker" aria-hidden="true" ></i> <a href="https://www.google.com/maps/place//@18.5396842,-69.8942128,15z">Location</a></li>
                           <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> DetodoChill@gmail.com</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <img className="tex_left" src={logo2} alt="#" />
                  </div>
                  <div className=" col-md-3 col-sm-6">
                     <p className="variat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum </p>
                  </div>
                  <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                     <h3>Information  </h3>
                     <ul className="link_menu">
                        <li> There are many </li>
                        <li> variations of pas</li>
                        <li> sages of Lorem </li>
                        <li> Ipsum available, </li>
                        <li>but the majority </li>
                        <li>have suffered  </li>
                     </ul>
                  </div>
                  <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                     <h3>Helpful Links</h3>
                     <ul className="link_menu">
                        <li> There are many </li>
                        <li> variations of pas</li>
                        <li> sages of Lorem </li>
                        <li> Ipsum available, </li>
                        <li>but the majority </li>
                        <li>have suffered  </li>
                     </ul>
                  </div>
                  <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                     <h3>Supported</h3>
                     <ul className="link_menu">
                        <li> There are many </li>
                        <li> variations of pas</li>
                        <li> sages of Lorem </li>
                        <li> Ipsum available, </li>
                        <li>but the majority </li>
                        <li>have suffered  </li>
                     </ul>
                  </div>
                  <div className="col-sm-12">
                     <ul className="social2_icon">
                        <li><a href="javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0)"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0)"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <p>© 2019 All Rights Reserved.<a href="https://html.design/"> Free html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
        </>
    )

}
export default Footer;
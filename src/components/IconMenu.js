import React from "react";
import '../style.css';
import  Notification from'../img/notification.png';
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

function IconMenu (){
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
      
    return(
        <>
            <div className="loader_bg">
                <div className="loader"><img src="images/loading.gif" alt="#"/></div>
            </div>
            <div id="myNav" className="menu_sid">
               
             <img  src={Notification}/>  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="menu_sid-content">
                <a href="#protien">Menu</a>
                <a href="#protien">Ofertas</a>
                <a href="#about">About us</a>
                <a href="#testimonial">Opiniones</a>
                <a href="#contact">Contact Us</a>
            </div>
      </div>
        </>

    );

};

export default IconMenu;
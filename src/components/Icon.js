import React from "react";
import  Notification from'../img/notification.png';
function Icon (){
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
    return(
        <>
           
            <div id="myNav" className="menu_sid">
            
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="menu_sid-content">
                <a href="#menu">Menu</a>
                <a href="#protien"><img src={Notification}/>  Ofertas </a>
                <a href="#about">About Us</a>
                <a href="#testimonial">Opiones</a>
                <a href="#contact">Contact Us</a>
            </div>
      </div>
        </>

    );

};

export default Icon;
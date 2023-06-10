import React from "react";
import '../style.css';
import logouser from '../img/user-circle-solid-24.png'
import logoeat from '../img/2-2-food-png-hd.png'
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

const Testimonial = () =>{
    return(
    
            <div id="testimonial" className="testimonial">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
             
                  <div className="titlepage">
                     
                     <h2>Testimonial</h2>
                     
                  </div>
                
               </div>
            </div>
            <div className="row">
               <div className="col-md-5">
                  <div className="body_blu_img">
                    <img  src={logoeat} alt="#"/>
                  </div>
               </div>
               <div className="col-md-7 pad_right0">
                  <div className="testimo_ban_bg">
                     <div id="testimo" className="carousel slide testimo_ban juan" data-ride="carousel">
                        <ol className="carousel-indicators">
                           <li data-target="#testimo" data-slide-to="0" className="active"></li>
                           <li data-target="#testimo" data-slide-to="1"></li>
                           <li data-target="#testimo" data-slide-to="2"></li>
                        </ol>
                        <div className="">
                           <div className="imgiconuser">
                           <img src={logouser} alt="#"/>
                           </div>
                           <div className="">
                              <div className="opionUser">
                             
                                 <div className=" relative2">
                                    <div className="row d_flex">
                                       <div className="col-md-11">
                                          
                                          <h3>Consectetur</h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        
                           <a className="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
                           <i className="fa fa-angle-left" aria-hidden="true"></i>
                           <span className="sr-only">Previous</span>
                           </a>
                           <a className="carousel-control-next" href="#testimo" role="button" data-slide="next">
                           <i className="fa fa-angle-right" aria-hidden="true"></i>
                           <span className="sr-only">Next</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

     


    )

}

export default  Testimonial;
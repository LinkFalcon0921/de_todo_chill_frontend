import React from "react";
import HealthyIMG from '../img/healthy4_Mesa de trabajo 1.png';
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
const Healthy = ()=>{
    return(
        <>
         <div className="growyhing">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="body_img">
                     <figure><img src={HealthyIMG}
                      align="#"/></figure>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="titlepage">
                     <div className="titulo1"> <h2>vegetarian</h2>
                     <h4 className="titulotext">For your body </h4>
                     </div>
            
                  </div>
                  <div className="read_moretitulo">
                  <a className="read_more" href="Javascript:void(0)"> Próximamente...</a>
               </div></div>
            </div>
         </div>
      </div>

        </>
    )

}

export default Healthy;
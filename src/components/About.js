import React from "react";
import chef  from '../img/chef5_Mesa de trabajo 1.png';
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
 const About =()=>{
    return(
        <>
      <section className="contentabout shadow-lg p-1 mb-6 bg-body-tertiary rounded" >
      <div id="about" className="about">
         <div className="container-fluid">
            
            <div className="row d_flex">
          
               <div className="col-md-6">
               <h2 className="textoabout">About Us</h2>
                  <div className="titlepage">
                     <p>En<strong> De Todo Chill</strong>, somos una pequeña empresa de carritos de comida rápida que busca deleitar a nuestros clientes con deliciosas opciones de comida callejera. Nos enorgullece presentar una amplia variedad de sabores y platos que satisfarán incluso a los paladares más exigentes.</p>
                     <p>Nuestro fundador y chef principal, Albirel, es el corazón y el alma de De Todo Chill. Con una pasión inigualable por la comida y una amplia experiencia en la cocina, Albirel ha creado un menú que combina los clásicos favoritos con creaciones únicas y originales. Cada plato es cuidadosamente elaborado con ingredientes frescos y de alta calidad para garantizar una experiencia gastronómica excepcional.</p>
                  </div>
                    
                  <a className="read_more" href="Javascript:void(0)"> Read More</a>
               </div>
               <div className="col-md-6 pad_right0">
                  <div className="about_img">
                     <figure><img src={chef} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </section>
        </>
    )

 }

export default About;
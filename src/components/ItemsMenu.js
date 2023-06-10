import React from "react";
import papas from '../img/papa.jpeg'
import logos from '../img/Fuego_Mesa de trabajo 1.png'
import pasta from '../img/pasta.jpg';
import hambur from '../img/hamburguersa.jpg';
import ensalada from '../img/tim-toomey-pe9dvM1rQkM-unsplash.jpg';
import ofertasimg from '../img/aji_Mesa de trabajo 1.png';
import compraicon from '../img/cart-download-regular-24.png';
import '../items.css';
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
import { Filters } from "./Filters";


const ItemsMenu = ({products})=>{
    
    return(
        <>
         <div id="protien" className="protien_main">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
               <div className="titlepage4">
                  <h2>Ofertas <img  className="imageicon" src={ofertasimg} /></h2>
                  </div>
               </div>
            </div>
            <div className="productos">
               
               
            <ul>
                {products.slice(0,4).map(products =>(
               
                
                
               <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded ofertas">
                                    
               <div className="protien">
                   <figure><img src={products.img} alt="#"/></figure>
                   <h3>{products.price} </h3>
                   <span>{products.title} </span>
                   <a className="read_more mar_top" href="Javascript:void(0)"><img className="compra" src={compraicon}/> Comprar</a>

                   <img className="logoItems" src={logos}/>
               </div>

               </div>
               
                   
                ))}
       </ul>
              

            </div>
         </div>
      </div>
        </>
    );

}

export default ItemsMenu;
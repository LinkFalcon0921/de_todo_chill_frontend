import React, { useState } from "react";
import logos from '../img/Fuego_Mesa de trabajo 1.png'
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
import { hover } from "@testing-library/user-event/dist/hover";
function btn_buing(){
    alert("buing..")

}
export function ProductsList ({products}){
    
    
    
    const [clickedProduct,setclickedProduct]= useState(null);
    const hadleCardClick = (productsId) =>{
        setclickedProduct(productsId);

    }
       

    return(
        <>
   
       


        <main className="productos">
             
                
                <ul>
                {products.slice(0,8).map(products =>(
                <div  name="ul"className={`card itemProducto shadow-lg p-1 mb-5 bg-body-tertiary rounded contenedorProducto ${
                    clickedProduct === products.id ? 'clicked' : ''
                  }`}
                  onMouseOver={()=>hadleCardClick(products.id)}
                > 
                <div className="contenidoProducto">
                 <il key={products.id} 
                 
                 >
                        <img className="itemimg" src={products.img} alt={products.id} />
                        <div>
                            <strong>{products.title} ${products.price} </strong> 
                        </div>
                        <div>
                        <a id="btn-buy" onClick={btn_buing} className="read_more mar_top" href="Javascript:void(0)"><img className="compra" src={compraicon}/> Add </a>
   

                        </div>
                        
                    </il>
                    </div>
                    </div> 
                ))}
       </ul>
    </main>
    </>
    )
    
}
export default ProductsList;
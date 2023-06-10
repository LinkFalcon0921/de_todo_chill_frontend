import React from "react";
import logos from '../img/Fuego_Mesa de trabajo 1.png'
import compraicon from '../img/cart-download-regular-24.png';

export function OfertasItems({OfertasIteams}){
    return(

    <>
        <div className="col-md-3 col-sm-6">
            {OfertasIteams.Slice(0,4).map(OfertasIteams=>{


                <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded">
                                    
                <div className="protien">
                    <figure><img src={OfertasIteams.img} alt="#"/></figure>
                    <h3>{OfertasIteams.price} </h3>
                    <span>{OfertasIteams.title} </span>
                    <a className="read_more mar_top" href="Javascript:void(0)"><img className="compra" src={compraicon}/> Comprar</a>

                    <img className="logoItems" src={logos}/>
                </div>

                </div>
                
               

            })}
          </div>
    </>
    )

}
export default OfertasItems;
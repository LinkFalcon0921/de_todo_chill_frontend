import React from "react";
import imglogo from '../img/Fuego_Mesa de trabajo 1.png'
import '../Menu.css'
import AMenu from "./Amenus";

const Paths = [
        
        "Home",
        "About us",
        "Menu",
        "Contacto",
        "Ofertas",
        "Login",
        "Register",
        "Mas"
        
];
function MenuLateral(){
    

 return(
     <>
            <div className="MenuLateral">
               <center>
               <ul className="menu">
                <img src={imglogo}/>
                
                {Paths.map((path) => {
                    return <li> <AMenu  name={path} /></li>
                })}
               </ul>
               </center>
               
            </div>
       </>
              
     )    
}

export default MenuLateral;
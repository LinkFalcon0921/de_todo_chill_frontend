import React from "react";
import '../Menu.css'
function AMenu(props){
   const Cargar =()=>{
    
   }
    return(
        <a className={props.className} onClick={{Cargar}} >{props.name} </a>

    );

}
export default AMenu;
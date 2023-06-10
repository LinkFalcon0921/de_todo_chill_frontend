import { Filters } from "./Filters";
import logo from '../img/Fuego_Mesa de trabajo 1.png'
 
export function HeaderMenu(){
 return(
    <>
     
      <header className="navbar navbar-expand-lg navbar-color">
    <div className="container d-flex align-items-center">
        <img src={logo} alt="" className="mr-2 iconoMenu"  />
        <h1 className="navbar-brand tituloMenu">Menu shop</h1>
        <Filters className="form-control"/>
    </div>
</header>
    </>
     )
}



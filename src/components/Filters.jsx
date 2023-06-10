import React, {  useId } from "react"
import '../Filters.css'

import { useFilters } from "./hooks/useFilters"





export function  Filters(){
    const {filters,setFilters}=useFilters() 
    
  
    const minPriceId = useId()
    const categoryId = useId()

    const hadleChangeMinPrice=(event)=>{
        
     
   
        setFilters(PrevState=>({
            ...PrevState,
            minPrice: event.target.value

        }))

    }
   
    const hadleChangeCategory =(e)=>{
        
        setFilters(PrevState =>({
            ...PrevState,
            category: e.target.value

        }
        ))
       
    }

    return(
       
      
    <>
        <section className="filters">
            <div className="form-group">
                <label htmlFor={filters.minPriceId} /> Precio a partir de:
                <div className="d-flex align-items-center">
                <input 
                type="range"
                className="form-control-range inputChange "
                id={minPriceId}
                min='0'
                max='1000'
                onChange={hadleChangeMinPrice}
                value={filters.minPrice}
                 /> <span className="ml-2">${filters.minPrice} </span>
                </div>
            </div>
            <div className="form-group">
            <div className="d-flex  align-items-center Menuspace ">
                <label htmlFor={categoryId}/> Categoria:
                <select className="form-control"  id={categoryId}onChange={hadleChangeCategory}> 
                    <option value="all">Todas</option>
                    <option value="Vegetarianas">Vegetarianas</option>
                    <option value="Picante">Picante</option>
                    <option value="Postres">Postres</option>
                    <option value="Entradas">Entradas</option>
                    <option value="Platos">Platos</option>
                </select>
                </div>
            </div>
        </section>
    </>
 )
        
}

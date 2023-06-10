import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters(){
    const{ filters, setFilters }= useContext(FiltersContext)
   
     const filterProducts= (products)=>{
       return [...products].filter(product =>{
         return(
           product.price >= filters.minPrice &&(
             filters.category ==='all'||
             product.category === filters.category
           )
         );
       });
       
       
     };
     const filterOfertas= (products)=>{
       return products.filter(product =>{
         return(
           product.price >= filters.minPrice &&(
             filters.category ==='Ofertas'||
             product.category === 'Ofertas'
           )
         );
       });
       
       
     };
     return{filters,filterProducts, setFilters,filterOfertas}
}
   
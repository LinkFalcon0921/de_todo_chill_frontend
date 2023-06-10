import { createContext, useState } from "react";
//creo el context del flitro
export const FiltersContext = createContext()

//creare el provider para proveer el context
export function FiltersProvider({children}){
    const [filters, setFilters ]= useState({
        category:'all',
         minPrice:0
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters

        }}
        >
            {children}

        </FiltersContext.Provider>
    )
}
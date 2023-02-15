import React, { useState, createContext } from "react";

export const Context = createContext();

export function Provider(props) {
    
    const [list, setList] = useState([])


    return (
        <Context.Provider value={[list, setList]}>
            {props.children}
        </Context.Provider>
    )
}

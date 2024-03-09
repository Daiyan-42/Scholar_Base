import React, {useState, createContext} from 'react'

export const Context = createContext()

export const ContextProvider = props => {
    
    const [categories, setCategories] = useState([]);

    return ( <Context.Provider value={{categories: categories, setCategories: setCategories}}>
        {props.children}
    </Context.Provider>
    )
}

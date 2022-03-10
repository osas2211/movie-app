import { createContext, useState, useReducer } from "react";

export const DetailsContext = createContext();
export const actions = {
     FETCH: "fetch-movie"
}

const reducer = (currentState, action)=> {
    switch(action.type){
        case actions.FETCH:
            return (action.payload) ;
        default: return currentState
    }
}

export const DetailsProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, []);

    return <DetailsContext.Provider value={[state, dispatch]}>{children}</DetailsContext.Provider>
}
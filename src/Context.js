import { createContext,useState} from "react";
export const AppContext=createContext();

function Context({children}){
    return(
        <>
        <AppContext.Provider value="neha">
            {children}
        </AppContext.Provider>
        </>
    )
}
export default Context;
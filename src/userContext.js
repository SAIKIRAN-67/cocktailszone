import React from 'react'
export const UserContext=React.createContext()
export const UserContextProvider=({children})=>{
    return<UserContext.Provider value={"sai"}>{children}</UserContext.Provider>
}
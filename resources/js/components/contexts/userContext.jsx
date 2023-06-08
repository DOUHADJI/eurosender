import {createContext, useEffect, useState } from "react";
import { getWithAxios } from "../api/axios";


export const UserContext = createContext()


export const UserContextProvider = ({children}) => {

    const [user, setUser] =useState()

    const context = {user, setUser}

    const getUser = async () => {
        const user = await getWithAxios('/api/user')
        console.log(user)
         setUser(user)
    }


    useEffect(()=>{
        getUser()
    },[user])

    return(
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}
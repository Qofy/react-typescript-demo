import {createContext } from "react";
import { theme } from "./them";


export const ThemeContex = createContext(theme)

type ThemeContexProp = {
  children: React.ReactNode
}

export const ThemeContextProvider = ({children}: ThemeContexProp)=>{
return <ThemeContex.Provider value= {theme}>
  {children}
</ThemeContex.Provider>
}
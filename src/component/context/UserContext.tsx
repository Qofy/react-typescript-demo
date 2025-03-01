import { useState } from "react"
import { createContext } from "react"

export type AuthUser = {
  name: string
  email: string
}

type UserContextProp = {
  children: React.ReactNode
}
type UserContextProviderProp = {
  user: AuthUser | null
  setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext = createContext <UserContextProviderProp | null>({} as UserContextProviderProp)


export const UserContextProvider = ({children}:UserContextProp)=>{
  const [user, setUser] = useState <AuthUser | null>(null)
  return <UserContext.Provider value={{user, setUser}}>
    {children}
  </UserContext.Provider>
}
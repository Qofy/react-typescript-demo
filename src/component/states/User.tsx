import { useState } from "react"

type AuthUser ={
  name: string
  email: string
}

export const User = () =>{
  const [user, setUser] = useState<AuthUser>({} as AuthUser)

  const handleLogIn= () =>{
    setUser({
      name: "Safo Kofi Agyekum",
      email: "safokofi@example"
    })
  }


  return(
    <div>
    <button onClick={handleLogIn}>Login</button>
    <div>User name is {user?.name}</div>
    <div>User email is {user?.email}</div>
    </div>
  )
}
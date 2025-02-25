import { useState } from "react"

type AuthUser ={
  name: string
  email: string
}

export const User = () =>{
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLogIn= () =>{
    setUser({
      name: "Safo Kofi Agyekum",
      email: "safokofi@example"
    })
  }
  const handleLogOut= () =>{
    setUser(null)
  }

  return(
    <div>
    <button onClick={handleLogIn}>Login</button>
    <button onClick={handleLogOut}>Logout</button>
    <div>User name is {user?.name}</div>
    <div>User email is {user?.email}</div>
    </div>
  )
}
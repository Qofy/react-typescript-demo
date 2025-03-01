import { UserContext } from "./UserContext"
import { useContext } from "react"

export const User = () => {
  const handleLogin =()=>{
    userContext?.setUser({
      name: "Safo Kofi",
      email: "safokofi@example"
    })
  }
  const handleOut =()=>{}

  const userContext = useContext(UserContext)
return(
  <div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleOut}>Logout</button>
    <div>User name is {userContext?.user?.name}</div>
    <div>User email is {userContext?.user?.email}</div>

  </div>
)
}
import { useState } from "react"

export const LoggedIn = () => {
  const [isLog, setIsLog] = useState(false)
  const handleLogIn = ()=>{
    setIsLog(true)
  }
  const handleLogOut = ()=>{
    setIsLog(false)
  }

  return(
    <div>
      <button onClick={handleLogIn}>Log-In</button>
      <button onClick={handleLogOut}>Log-out</button>
      <div>User is {isLog ? "Lgoin" : "LogOut"}</div>
    </div>
  )
}
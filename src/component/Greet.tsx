

type GreetProps = {
  name : string
  messageCount: number
  isLogin: boolean
}
export const Greet = (prop:GreetProps) =>{
  return(
    <div>
      {prop.isLogin ?
      <h1>Welcome {prop.name}! You have {prop.messageCount} unread messages</h1>
      : `You are welocme ${prop.name}`
    }
    </div>
  )
}
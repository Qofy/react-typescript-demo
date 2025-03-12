type MyGreetProps = {
  name: string
  num: number
  isLoggin: boolean
  isPaid: boolean
}
export function MyGreet({name, num, isLoggin, isPaid}:MyGreetProps){
  return(
    <>
    {isLoggin ? <h1>You are Welcome to {name} web class</h1> : <h4>Please Login</h4>}
    
    <h2>I highly encourage you to do {num} example after each videos</h2>
    <h4>You have {num} messages unread</h4>

    {isPaid ? <h4>You have successfully purchase a boosting power💪</h4> : <h4>Please purchase a boosting power💪</h4>}
    </>
  )
}
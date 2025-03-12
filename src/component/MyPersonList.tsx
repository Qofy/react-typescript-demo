
type PersonListProps = {
  name:{
    first:string
    last:string
  }[]
}

 
export function MyPersonList({name}:PersonListProps){
  return(
    <>
    {name.map(names => {
      return(
        <h2>My name is { names.first} {names.last}</h2>
      )
    })}
    </>
  )
}
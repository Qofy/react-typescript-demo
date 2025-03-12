
type MyPersonProps ={
  fullName:{
    first:string
    last:string
  }
}

export const fullName = {
  first: "Safo",
  last: "Kofi"
}
export function MyPerson({fullName} : MyPersonProps) {
 
  return(
    <>
    <h3>
      My firts name is {fullName.first} and last name is {fullName.last}
    </h3>
    </>
  )
}
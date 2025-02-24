
type PersonProps = {
  name: {
    firstName : string
    lastName : string
  }
}

export const Person = (props:PersonProps) => {
  return(
    <div>
      <h2>Hello this is {props.name.firstName} {props.name.lastName}</h2>
    </div>
  )
}
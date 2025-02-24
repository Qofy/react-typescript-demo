type HeadingPros = {
  children: string
}
export const Heading = (props:HeadingPros) => {
  return(
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}
type InputProps = {
  value : string,
  handleOnchange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (prop:InputProps) => {
  return <input type="text" value={prop.value} onChange={prop.handleOnchange}/>
}
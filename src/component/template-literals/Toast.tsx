type Vertical ="left"|"right"|"center"
type Horizontal = "top"| "center"| "buttom"

type PositionProps = {
  position: Exclude<`${Vertical}-${Horizontal}`, "center-center">|"center"
}
export const Toast = ({position}: PositionProps) => {
  return(
    <div>
      Toast Notification Position- {position}
    </div>
  )
}
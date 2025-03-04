 type RandomNumberProps =  Negativ | Positive | Zero

 type RandomType= {
  value: number
 }
 type Positive = RandomType &{
  isPositive?: boolean
  isNegative?: never
  isZero?: never
 }

 type Negativ = RandomType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
 }

 type Zero = RandomType &{
  isZero?:boolean
  isPositive?: never
  isNegative?: never
 }

 export const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
return (
  <div>
    {value} {isPositive && "positive"} {isNegative && "negative"} {" "} {isZero && "zero"}
  </div>
)
 }
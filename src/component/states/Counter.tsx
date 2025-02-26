import { useReducer } from "react"

type CounterState = {
  count : number
}
type PayLoadAction = {
  type : "increment" | 'decrement'
  payLoad: number
}

type PayloadReset = {
  type:"reset"
}

type CounterAction = PayLoadAction | PayloadReset

function reducer(state: CounterState,action: CounterAction){
  switch(action.type){
    case 'increment':
      return {count : state.count + action.payLoad}
    case 'decrement':
      return{count: state.count - action.payLoad}
      case 'reset':
      return InitialState
      default:
        return state
  }
}
const InitialState = {count: 0}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, InitialState)
  return(
    <div>
      Count: {state.count}
      <button onClick={() => {dispatch({type:'increment', payLoad: 10})}}>
        Increment 10
      </button>
      <button onClick={() => {dispatch({type:'decrement', payLoad: 10})}}>
        Decrement 10
      </button>
      <button onClick={() => {dispatch({type:'reset'})}}>Reset</button>
    </div>
  )
}
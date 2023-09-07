
import {useSelector,useDispatch} from "react-redux"
import { decrementCounter, incrementCounter, restCounter } from "./services/action/countAction"

function App() {
  
const count=useSelector(state=>state.count)

const dispatch=useDispatch()

const handleIncrement=()=>{
  dispatch(incrementCounter())
}
const handleDecrement=()=>{
dispatch(decrementCounter())
}
const handleRest=()=>{
dispatch(restCounter())
}


  return (
    <>
    <h1>Counter App In Redux</h1>
    <p>Count:{count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleRest}>Rest</button>
    </>
  )
}

export default App

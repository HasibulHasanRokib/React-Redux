import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getAllData} from './action/todoAction'

const App = () => {

const{isLoading,error,todo}=useSelector(state=>state)

const dispatch=useDispatch()

useEffect(()=>{
dispatch(getAllData())
},[])



  return (
    <>
      <h1>Redux Fetch Api</h1>
      {isLoading && <h2>Loading</h2>}
      {error && <p>404 Not Found</p>}
      {todo && todo.map((item)=>{
        return <p key={item.id}>{item.title}</p>
      })}
    </>
  )
}

export default App


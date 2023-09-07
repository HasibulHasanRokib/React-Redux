import axios from "axios"
import {GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS} from "../constant/todoConstant.jsx"

export const getAllData=()=>async(dispatch)=>{
   try {
    dispatch({type:GET_TODO_REQUEST})
    const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
    dispatch({type:GET_TODO_SUCCESS,payload:res.data})
   } catch (error) {
    dispatch({type:GET_TODO_FAILED,payload:error.message})
   }
}


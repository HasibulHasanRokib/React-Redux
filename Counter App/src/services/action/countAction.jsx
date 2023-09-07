import { DECREMENT, INCREMENT, REST } from "../constant/countConstant"

export const incrementCounter=()=>{
    return{
        type:INCREMENT
    }
}
export const decrementCounter=()=>{
    return{
        type:DECREMENT
    }
}
export const restCounter=()=>{
    return{
        type:REST
    }
}
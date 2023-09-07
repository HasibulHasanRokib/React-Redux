import {GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS} from "../constant/todoConstant"


const initialState={
    isLoading:false,
    error:null,
    todo:[]
}


const todoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_TODO_REQUEST:
            return{
                ...state,
                isLoading:true
            }
         case GET_TODO_SUCCESS:
            return{
                isLoading:false,
                error:null,
                todo:action.payload
            }   
        case GET_TODO_FAILED:
            return{
                isLoading:false,
                error:action.payload
            }            
    
        default:
            return state;
    }
}
export default todoReducer
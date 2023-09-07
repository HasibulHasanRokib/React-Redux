import{createStore} from "redux"
import countReducer from "./services/reducer/countReducer"


const store=createStore(countReducer);

export default store
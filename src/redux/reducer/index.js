import handleCart from "./handleCart";
import { combineReducers } from "redux";


const rootReducers = combineReducers({
    addItem:handleCart,

})

export default rootReducers;
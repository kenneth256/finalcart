import { configureStore } from "@reduxjs/toolkit"; // Changed require to import
import cartReducer from './cart-slice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
       
    }
})

export default store
const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cart-slice'
import dummyReducer from 'dummy-slice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        dummy: dummyReducer
    }
})

export default store
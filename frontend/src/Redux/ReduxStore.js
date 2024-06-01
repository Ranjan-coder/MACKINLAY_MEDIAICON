import { configureStore } from "@reduxjs/toolkit";
import fetchUser from './ReduxSlice'

 const ReduxStore =configureStore({
    reducer:{
        User:fetchUser
    }
 })

 export default ReduxStore;
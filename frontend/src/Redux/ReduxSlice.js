import {createSlice} from '@reduxjs/toolkit'

const ReduxSlice = createSlice({
   name:"ReduxSlice",
   initialState:{
       currentUser:{
           token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
           email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
           name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
           usertype: localStorage.getItem("usertype")
             ? localStorage.getItem("usertype")
             : "",
     

       }
   },
   reducers:{
       handleUserLogin(state,action){
              state.currentUser.token = action.payload.token;
               state.currentUser.email = action.payload.email;
               state.currentUser.name = action.payload.name;
               state.currentUser.usertype = action.payload.usertype;  
               
               localStorage.setItem("token", state.currentUser.token);
               localStorage.setItem("email", state.currentUser.email);
               localStorage.setItem("name", state.currentUser.name);
               localStorage.setItem("usertype", state.currentUser.usertype);
         
       },
       handleUserLogOut(state) {
           state.currentUser.token = "";
           state.currentUser.email = "";
           state.currentUser.name = "";
           state.currentUser.usertype = "";
     
           localStorage.clear();
         },
     
   }
})

export const {handleUserLogin,handleUserLogOut}=ReduxSlice.actions;
export default ReduxSlice.reducer

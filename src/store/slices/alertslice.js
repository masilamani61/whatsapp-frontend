import { createSlice } from "@reduxjs/toolkit";


export const alertslice=createSlice({
  name:'alert',
  initialState:{open:false,close:true,content:null},
  reducers:{
    openalert(state,action){
        
        state.content=action.payload
        state.open=true
    },
    closealert(state,action){
        state.open=action.payload
    }
  }

})


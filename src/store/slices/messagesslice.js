import { createSlice } from "@reduxjs/toolkit";

const messageslice=createSlice({
    name:'message',
    initialState:[],
    reducers:{
        addmessage(state,action){
            state=action.payload
        }
    }
})

export default messageslice
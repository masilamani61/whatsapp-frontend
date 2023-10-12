import { createSlice } from "@reduxjs/toolkit";

const invitationslice=createSlice({
    name:'invitation',
    initialState:{
        freind:[],
        pending:[],
        onlineusers:[]
    },
    reducers:{
        addfriend(state,action){
            state.freind=action.payload
        },
        pendinginvitations(state,action){
            console.log('starting to dispatch')

            state.pending=action.payload
        },
        setonlineusers(state,action){
            state.onlineusers=action.payload
        }

    }
})

export default invitationslice
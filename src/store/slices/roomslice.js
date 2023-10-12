import { createSlice } from "@reduxjs/toolkit";

const roomslice=createSlice({
    name:'room',
    initialState:{
        isuserinroom:false,
        isuserisoomcreator:false,
        roomdetails:null,
        activerooms:[],
        localstream:null,
        audioonly:false,
        remotestream:[]
    },
    reducers:{
        setroom(state,action){
            state.isuserinroom=true
            state.isuserisoomcreator=true
        },
        setlocalstrem(state,action){
            console.log(action.payload)
            state.localstream=action.payload
        },
        createroom(state,action){
            state.roomdetails=action.payload
        },
        setactiveroom(state,action){
            state.activerooms=action.payload
        },
        removeroom(state,action){
            state.isuserinroom=false
            state.isuserisoomcreator=false
        },
        setaudioenable(state,action){
            state.audioonly=!state.audioonly;
        },
        setremotestream(state,action){
            state.remotestream.push(action.payload)
        },
        leaverempotestream(state,action){
            state.remotestream=action.payload
        }
    }
})

export default roomslice
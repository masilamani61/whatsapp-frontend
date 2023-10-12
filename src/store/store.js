import {createSlice,configureStore} from '@reduxjs/toolkit'
import { authslice } from './slices/authslices'
import {alertslice} from './slices/alertslice'
import invitationslice from './slices/friendinvitationslice'
import chatSlice from './slices/chatslice'
import roomslice from './slices/roomslice'

export const store=configureStore({
    reducer:{
        auth:authslice.reducer,
        alert:alertslice.reducer,
        invite:invitationslice.reducer,
        chat:chatSlice.reducer,
        room:roomslice.reducer
    }
})
console.log(store.getState())
export const {login,register,logout}=authslice.actions
export const {openalert,closealert}=alertslice.actions
export const {pendinginvitations,addfriend,setonlineusers}=invitationslice.actions
export const {setchatdetails,clearmessages,setmessages}=chatSlice.actions
export const {setroom,createroom,setactiveroom,leaverempotestream,setremotestream,removeroom,setlocalstrem,setaudioenable}=roomslice.actions
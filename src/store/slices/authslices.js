import {createSlice,configureStore} from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { store } from '../store'

export const authslice=createSlice({
    name:"auth",
    initialState:{userdetails:null},
    reducers:{
        login(state,action){
            state.userdetails=action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        register(state,action){
            state.userdetails=JSON.stringify(action.payload)
            console.log(state)
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        logout(state,action){
            console.log('logout')
            window.localStorage.clear()
            state.userdetails=null
        }
    }
})
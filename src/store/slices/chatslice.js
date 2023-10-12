import {createSlice} from '@reduxjs/toolkit'

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        chatdetails:null,
        chattype:null,
        messages:null
    },
    reducers:{
        setchatdetails(state,action){
            const {chatdetails,chattype}=action.payload
            console.log(chatdetails,chattype)
            state.chatdetails=chatdetails
            state.chattype=chattype
        },
        setmessages(state,action){
            const {participants,messages}=action.payload
            console.log(action.payload)
            if (participants.includes(state.chatdetails?.id)){
            
                state.messages=messages
                console.log('setted message')
            }
            else{
                state.messages=null
            }
        },
        clearmessages(state,action){
            state.chatdetails=null
            state.chattype=null
            state.messages=null
        }
    }
})

export default chatSlice
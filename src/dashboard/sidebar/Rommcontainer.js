import styled from '@emotion/styled'
import React, { useState } from 'react'
import Roombutton from './roombutton/Roombutton'
import { Button, Fab } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { leaverempotestream, removeroom, setlocalstrem } from '../../store/store'
import { leaveroom } from '../realtimecommunication/socket-client'
import Video from './Video'
import { closeallconnection } from '../realtimecommunication/webrtc'
import {Grid} from "@mui/material"

function Rommcontainer() {
    const [showfull,setshowfull]=useState(false)
    const Maincontainer=styled('div')({
        position:'absolute',
        top:0,
        left:'0',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:'20px 20px 20px 20px',
        
    })

    const showfullscreen={
        height:'100%',
        width:'100%'
    }
    const miniscreen={
        height:'40vh',
        width:'40vh'
    }
    const dispatch=useDispatch()
    const {roomdetails,localstream,remotestream}=useSelector(state=>state.room)
    const deleteclick=()=>{
        leaveroom(roomdetails.room?.roomid)
        dispatch(removeroom())
        console.log('deleted')
        if (localstream){
        localstream.getTracks().forEach(track => {
            track.stop()
        })
        
        dispatch(setlocalstrem(null))
        closeallconnection()
    }
    }
  return (
    <Maincontainer style={showfull?showfullscreen:miniscreen}>
        <div style={{right:0,top:0}}>
            <Button onClick={deleteclick}>cancel</Button>
        </div>

        <div style={{display:'flex', flexDirection:'column',height:'100%',width:'100%'}}>
            {localstream&&
        <Video localstream={localstream} me={true} />}
        {remotestream &&(
            remotestream.map(r=>(
             <Video localstream={r} me={false} /> )))}
        </div>
       
            
           
       
                
            

        {/* <div style={{position:'absolute',top:'0',left:'0'}}>
        <Video localstream={localstream} />
        </div>
        {remotestream?.map(stream=>(
            <Video localstream={stream}/>
        ))} */}
        <div style={{display:'flex',position:'absolute',bottom:'0'}}>
        <Roombutton />
        </div>
        <button onClick={()=>setshowfull(!showfull)} style={{position:'absolute',fontSize:"20px",color:'blue',bottom:'0',right:'0'}}><i class="fa-solid fa-up-right-and-down-left-from-center"></i></button>
    </Maincontainer>
  )
}


export default Rommcontainer

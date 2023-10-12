import styled from '@emotion/styled'
import React, { useState } from 'react'
import Roombutton from './roombutton/Roombutton'
import { Button } from '@mui/material'
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
        bottom:'0',
        right:'0',
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
        height:'50vh',
        width:'50vh'
    }
    const dispatch=useDispatch()
    const {roomdetails,localstream,remotestream}=useSelector(state=>state.room)
    const deleteclick=()=>{
        leaveroom(roomdetails.room?.roomid)
        dispatch(removeroom())
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
        <div style={{position:'absolute',right:0,top:0}}>
            <Button onClick={deleteclick}>cancel</Button>
        </div>
        <Grid container spacing={2} sx={{margin:"auto",overflow:"hidden",width:"100%"}} >
            <Grid item  xs={12} md={6}>
            <Video localstream={localstream} />

            </Grid>
            {remotestream?.map(stream=>(
                <Grid item xs={12} md={6}>
            <Video localstream={stream}/>
            </Grid>
        ))}
                
            

        </Grid>
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
import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import Sidebar from './sidebar/Sidebar'
import Freindlist from './FreindsList/Freindlist'
import Messanger from './messenger/Messanger'
import Appbar from './appbar/Appbar'
import { logout } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Socketcoonection } from './realtimecommunication/socket-client'
import Rommcontainer from './sidebar/Rommcontainer'


function Dashboardpage() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {isuserinroom}=useSelector(state=>state.room)
  useEffect(()=>{
    const userdetails=localStorage.getItem('user')
    console.log(userdetails)
    if(userdetails==null){
      console.log('called')
      dispatch(logout())
      navigate('/login')
    }
    else{
      
      Socketcoonection(JSON.parse(userdetails))
    }
  },[])

  const Maincontainer=styled('div')({
    position:'absolute',
    width:'100%',
    height:'100vh',
    backgroundColor:'gray',
    display:'flex'
  })
  return (
    <Maincontainer>
      <Sidebar/>
      <Freindlist/>
      <Messanger/>
      <Appbar/>
      {isuserinroom && <Rommcontainer/>}
    </Maincontainer>
  )
}

export default Dashboardpage
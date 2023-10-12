import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import Onefriend from './Onefriend'
import { useSelector } from 'react-redux'
import { object } from 'joi'

function Friends() {
    const Maincontainer=styled('div')({
        width:'100%',
        flexGrow:1,
        paddingBottom:'30px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    })
    const {freind,onlineusers}=useSelector(state=>state.invite)
    const onlinerfriends=(frnd,onliner)=>{
      Object.freeze(frnd)
      const l=[]
      for (let f of frnd){
        const v1={...f}
        const a=onliner.find(u=>f.id===u)
        if (a){
          v1.online=true
        }
        l.push(v1)
       
        
      }
     
      return l
    }
    useEffect(()=>{},[freind])
  return (
    <Maincontainer>
        {onlinerfriends(freind,onlineusers).map(f=>(
            <Onefriend frnddetails={f}/>
        ))}
    </Maincontainer>
  )
}

export default Friends
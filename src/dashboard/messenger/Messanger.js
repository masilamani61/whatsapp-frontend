import styled from '@emotion/styled'
import React from 'react'
import { connect, useSelector } from 'react-redux'
import Welcomemessage from './Welcomemessage'
import MessageContent from './MessageContent'

function Messanger({chatdetails}) {
    const Wrapper=styled('div')({
        flexGrow:1,
        backgroundColor:'black',
        marginTop:'30px',
        display:'flex'
    })
    
  return (
    <Wrapper>
      {(chatdetails==null)?<Welcomemessage/>:<MessageContent chatdetails={chatdetails}/>}
    </Wrapper>
  )
}
const mapToStatetoProps=(state)=>{
  return{
  chatdetails:state.chat.chatdetails}
}

export default connect( mapToStatetoProps )(Messanger)
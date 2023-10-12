import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { pendinginvitations } from '../../store/store'

function Dispatch({data}) {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(pendinginvitations(data.pendinginvitations))
    },[])
  return null
   
  
}

export default Dispatch
import Snackbar  from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert'

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { closealert } from "../store/store";

function AlertNotifaction() {
    const {open,close,content}=useSelector((state)=>state.alert)
    const dispatch=useDispatch()
    console.log(alert)
  return (
    <div>
            <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'center'}}
            open={open} onClose={()=>{dispatch(closealert(false))}} autoHideDuration={5000}>
                <Alert severity="info">{content}
                </Alert>
            </Snackbar>
        

    </div>
  )
}

export default AlertNotifaction
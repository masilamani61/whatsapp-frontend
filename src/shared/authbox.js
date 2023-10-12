import Box from '@mui/material/Box'
import {styled} from '@mui/system'

const Boxwrapper=styled('div')({
    width:'100%',
    height:'100vh',
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:'#5865F2'
})
const Authbox=(props)=>{
    return (
    <Boxwrapper>
        <Box sx={{
            width:700,
            height:400,
            backgroundColor:'#36393F',
            borderRadius:'5px',
            display:'flex',
            flexDirection:'column',
            padding:'25px'
        
        }}>
            {props.children}
        </Box>
    </Boxwrapper>
    )
}
   
  

export default Authbox
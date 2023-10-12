import { useDispatch, useSelector } from "react-redux"
import { setmessages } from "../../store/store"

export const Updatechathistory=(data)=>{
    const {participants,messages}=data
    const userid=localStorage.getItem('user').id
    const {chatdetails}=useSelector(state=>state.chat)
    const cnversation=[userid,chatdetails.id]
    const dispatch=useDispatch()
    const result=(cnversation,participants)=>{
        

        return participants.includes(cnversation[0])&&participants.includes(cnversation[1])
    }
    if (result){
        dispatch(setmessages(messages))
    }
    return null

}
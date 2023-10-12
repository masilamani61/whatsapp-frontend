import { store,setlocalstrem, setremotestream, leaverempotestream } from "../../store/store"
import Peer from 'simple-peer'
import { signalpeerdata } from "./socket-client"
const onlyaudioconstraints={
    audio:true,
    video:false
}
const defaultconstraints={
    audio:true,
    video:true
}

const getconfiguration=()=>{
  const stunservere=null
  if (stunservere){

  }
  else{
    return {
    
      iceServer:[
        {
          url:'stun:stun.1.google.com:19302'
        }
      
      ]
    }
  }
}

export const localstream=(onlyaudio=false,cb)=>{
    const constraints =onlyaudio?onlyaudioconstraints:defaultconstraints
    navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
         store.dispatch(setlocalstrem(stream))
        cb()
    }).catch(()=>{console.log('failed')})
}

let peer={}
export const peerconnection=(socketid,initiator)=>{
  const localstream=store.getState().room.localstream
  if (initiator){
    console.log('initiator is formed by init')
  }
  else{
    console.log('not initiator  sfrom egkhli')
  }
  peer[socketid]=new Peer({
    
    initiator:initiator,
    config:getconfiguration(),
    stream:localstream
  })
  console.log(peer)
  peer[socketid].on('signal',(data)=>{
    const signaldata={
      signal:data,
      connectedSocketId:socketid
    }
    signalpeerdata(signaldata)
  })
  peer[socketid].on('stream',(mediaStream)=>{
    console.log('stream is coming' )
    console.log("connected esatblished")
    mediaStream.socketid=socketid
    handlemediastream(mediaStream)
  })
}
export const signalhandling=(data)=>{
  const {connectedSocketId,signal}=data
  console.log(peer)
  if (peer[connectedSocketId]){
    console.log(peer[connectedSocketId],'perrhandlfin')
    peer[connectedSocketId].signal(signal)
  }
  else{
    console.log('dailed con')
  }
}
const handlemediastream=(stream)=>{
  store.dispatch(setremotestream(stream))
}
export const closeallconnection=()=>{
  Object.entries(peer).forEach(p=>{
    const connectedSocketId=p[0]
    
    if (peer[connectedSocketId]){
      console.log(peer)
      peer[connectedSocketId].destroy()
      
      delete peer[connectedSocketId]
    }
  })

}

export const handleleftparticipants=(data)=>{
  const {leavesocketid}=data
  console.log(data)
  if (peer[leavesocketid]){
    peer[leavesocketid].destroy()
    console.log('destroy frunction working')
    delete peer[leavesocketid]
  }
  const remotestream=store.getState().room.remotestream
  const newremotestream=remotestream.filter(p=>p.socketid!=leavesocketid)
  store.dispatch(leaverempotestream(newremotestream))
}
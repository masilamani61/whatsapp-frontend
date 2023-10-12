
import io from 'socket.io-client'
import { addfriend, createroom, pendinginvitations, setactiveroom, setmessages, setonlineusers, store } from '../../store/store'
import { Updatechathistory } from './updatechathistory'
import { handleleftparticipants, peerconnection, signalhandling } from './webrtc'
let socket=null
export const Socketcoonection=(userdetails)=>{
    const token=userdetails.token
    
    socket=io('https://whatsapp-backend-6neq.onrender.com', {
        auth:{token,}
    },)
     socket.on('connect',
   ()=>{
        console.log('succes')
        console.log(socket.id)
    })
    socket.on('friends-list',(data)=>{ 
        const {friends}=data
        console.log('friends',friends)
        store.dispatch(addfriend(friends))
    })
    socket.on('friend-invitations',(data)=>{
        console.log('friend inviation comed',data)
        store.dispatch(pendinginvitations(data.pendinginvitations))
    })
   socket.on('room-create',(data)=>{
    console.log(data,'roomdetails has ')
        store.dispatch(createroom(data?.roomdetails))
   })
   socket.on('conn-join',(data)=>{
    console.log(data,'join connection')
    const {connecteduserSocketid}=data;
    peerconnection(connecteduserSocketid,false)
    socket.emit('conn-init',{connecteduserSocketid:connecteduserSocketid})
   })
   socket.on('conn-init',(data)=>{
    const {connecteduserSocketid}=data;
    peerconnection(connecteduserSocketid,true)
   })
   socket.on('conn-signal',(data)=>{
        console.log('signal handl',data)
        signalhandling(data)
   })
   socket.on('active-room',(data)=>{
        const activerroom=data
        const friends=store.getState().invite.freind
        const rooms=[]
        activerroom.forEach(room => {
            friends.forEach(friend=>{
                if(friend.id===room.roomcreator?.userid){
                    rooms.push({room,creator:friend.username})
                }
            })
            
        });
        console.log(rooms,activerroom)
        store.dispatch(setactiveroom(rooms))

    
   })
   socket.on('participant-left',(data)=>{
        handleleftparticipants(data)
   })
    socket.on('online-users',(data)=>{
        const {onlinusers}=data
        
        store.dispatch(setonlineusers(onlinusers))
    })
    socket.on('chat-history',(data)=>{
        console.log('chat history',data)

        store.dispatch(setmessages(data))
    })
}

export const sendmessage=(data)=>{
    console.log(data)
    socket.emit('private-message',data)
}

export const renderinitialchat=(data)=>{
   
    socket.emit('initial-chat',data)
}

export const roomcreate=()=>{
    socket.emit('room-create')
}

export const joinroom=(data)=>{
    socket.emit('join-room',data)   
}
export const leaveroom=(data)=>{   
    socket.emit('leave-room',data)
}
export const signalpeerdata=(data)=>{
    socket.emit('signal-conn',data)
}
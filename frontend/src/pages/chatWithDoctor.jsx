import "../assets/Chat.css";
//import { useState } from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import io from "socket.io-client";

 
import Chat from "../components/chat";
import NavBarPatient from "../components/NavBarPatient";

const socket = io.connect("http://localhost:4000");

function ChatWithDoctor() {
  const {usernamePatient, usernameDoctor} = useParams();
  const [showChat, setShowChat] = useState(false);

//   //const [room, setRoom] = useState('');
//   const navigate = useNavigate();


//   const [showChat1, setShowChat1] = useState(false);
//   const [showChat2, setShowChat2] = useState(false);

//   const joinRoom1 = () => {
//     socket.emit("join_room", 1);
//     setShowChat1(true);
// };

// const joinRoom2 = () => {
//   socket.emit("join_room", 2);
//   setShowChat2(true);
// };
const joinRoom = () => {
    socket.emit("join_room", 3);
    setShowChat(true);
    //navigate(`/chat/${socket}/${props.username}/1`);
};

  return (
    <div>
      <NavBarPatient username={usernamePatient}/>
    <h1>Chat With a doctor</h1>
    
    <div className="d-flex flex-row justify-content-center">
    {!showChat ? (
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={joinRoom}
      >
        Start Chat
      </button>
      ) : (
        <Chat socket={socket} username={usernamePatient} room={3} />
      )}
    </div> 
    </div>
  );
}

export default ChatWithDoctor;
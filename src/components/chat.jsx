import { useState, useEffect } from "react";
import { db, auth } from "../firebase.config";
import 'animate.css';
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { SendHorizonal, SendHorizontal } from "lucide-react";
import "../styles/Chat.css";

export const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <><div className="header mt-14">
      <h1 className="titleroom sticky top-0 z-49 py-3">Room : {room.toUpperCase()}</h1>
    </div><div className="chat-app min-h-screen max-h-fit">

        <div className="messages ">
          {messages.map((message) => (
            <div key={message.id} className="chat chat-start">
              <div className="chat-header m-2 -z-1">
                {message.user}
              </div><div className="chat-bubble ml-3 -z-1 animate__animated animate__fadeInLeft">{message.text}</div><div className="chat-footer mx-4 opacity-50">
                Delivered
              </div></div>
          ))}
        </div>
        
      </div>
      <form onSubmit={handleSubmit} className="new-message-form w-full flex justify-center items-center  sticky bottom-0 z-50 py-3">
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="new-message-input input w-full max-w-xs"
            placeholder="Type your message here..." />
          <button type="submit" className="btn btn-neutral ml-5">
            <SendHorizontal fill="currentColor" />
          </button>
        </form></>
  );
};

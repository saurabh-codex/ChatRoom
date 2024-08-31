import  { useState} from "react";
import { Auth } from "./components/Auth";
import { AppWrapper } from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";
import { Chat } from "./components/chat";

const cookies = new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      > 
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room min-h-screen max-h-fit flex flex-col justify-center items-center">
          <label className="text-xl my-4"> Type room name: </label>
          <input className="input input-bordered w-full max-w-xs" onChange={(e) => setRoom(e.target.value)} />
          <button className="my-4 text-sm btn btn-active btn-neutral"
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </AppWrapper>
  );
}

export default ChatApp;
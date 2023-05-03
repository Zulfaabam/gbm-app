
import React, { useState } from "react";
import { Chat } from "../components/Chat";
import AppWrapper from "../components/AppWrapper";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

function konsultasi() {
  const [isAuth, setIsAuth] = useState("");
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
  
  // if (!isAuth) {
  //   return (
  //     <AppWrapper
  //       isAuth={isAuth}
  //       setIsAuth={setIsAuth}
  //       setIsInChat={setIsInChat}
  //     >
  //       <Auth setIsAuth={setIsAuth} />
  //     </AppWrapper>
  //   );
  // }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
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
      <Chat room={room} />
    </AppWrapper>
  );
}
export default konsultasi;

import React, { useState, useEffect } from "react";
import { db, auth } from "@/firebase/clientApp";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export interface Message {
  id: string;
  user: string;
  text: string;
  room: string;
}

export interface ChatProps {
  room: string;
}

const Chat = ({ room }: ChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages: Message[] = [];

      snapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          text: doc.data().text,
          user: doc.data().user,
          room: doc.data().room,
        });
      });

      console.log(messages);
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newMessage === "") return;

    if (auth.currentUser) {
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room,
      });
    }

    setNewMessage("");
  };

  return (
    <div className="chat">
      <div className="header">
        <h1>Welcome to: {room.toUpperCase()}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;

import React, { useState, useEffect, useContext, useRef } from "react";
import { db, auth } from "@/firebase/clientApp";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { AuthContext } from "context/AuthContext";
import InputField from "../InputField";
import MyButton from "../MyButton";
import { IconButton } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";

export interface Message {
  id: string;
  userName: string;
  text: string;
  room: string;
  createdAt: Timestamp;
  userId: string;
}

export interface ChatProps {
  room: string;
  onLeaveChat: () => void;
}

const Chat = ({ room, onLeaveChat }: ChatProps) => {
  const user = useContext(AuthContext);

  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const messageEndRef = useRef<HTMLDivElement>(null);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let newMessages: Message[] = [];

      snapshot.forEach((doc) => {
        newMessages.push({
          id: doc.id,
          text: doc.data().text,
          userName: doc.data().userName,
          room: doc.data().room,
          createdAt: doc.data().createdAt,
          userId: doc.data().userId,
        });
      });

      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (newMessage === "") return;

    if (auth.currentUser) {
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        userName: user?.displayName,
        userId: user?.uid,
        room,
      });
    }

    setNewMessage("");
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      <div className="bg-dark w-full text-white flex gap-2 items-center px-4 py-3">
        <IconButton onClick={onLeaveChat}>
          <IoArrowBack color="#ffffff" />
        </IconButton>
        <h2>Kode Room: {room}</h2>
      </div>
      <div className="px-4 min-h-[300px] max-h-[500px] overflow-y-auto overflow-x-hidden hide-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat space-y-1 ${
              message.userId === user?.uid ? "chat-end" : "chat-start"
            }`}
          >
            <p className="chat-header font-semibold">
              {message.userId === user?.uid
                ? user?.displayName
                : message.userName}
            </p>
            <div
              className={`chat-bubble break-words ${
                message.userId === user?.uid
                  ? "bg-gbm-green"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </div>
            <div className="chat-footer opacity-50 text-xs">
              {message.createdAt?.toDate()?.toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
                hour12: false,
              })}
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <form className="w-full px-4 mt-6 flex gap-4">
        <InputField
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          placeholder="Type your message here..."
        />
        <div>
          <MyButton
            content="Kirim"
            onClick={(e) => handleSubmit(e)}
            className="btn-purple"
          />
        </div>
      </form>
    </div>
  );
};

export default Chat;

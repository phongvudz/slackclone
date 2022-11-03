import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import firebase from "firebase/compat";

const ChatInput = ({ channelId, channelName, chatRef }) => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Vu Phong Nguyen",
      userImage:
        "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/292137047_153422633941413_3314493742668256597_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=qlsyX98amokAX8DzBgu&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBwgdFFWp1kegWAgHmQmGwc-_8VyoE2DY-lzuFCesjziw&oe=6368B091",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName || "ROOM"}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

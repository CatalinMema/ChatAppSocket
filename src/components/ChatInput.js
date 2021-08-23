import { Button } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Context } from "../store/Store";
function ChatInput({ activeTopic, channelName, chatRef, from }) {
  const { sendChatAction } = useContext(Context);
  const inputRef = useRef(null);
  const [textValue, setTextValue] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    if(textValue)
    sendChatAction({
      from: from,
      msg: textValue,
      topic: activeTopic,
    });
    setTextValue("");
    inputRef.current.value = "";
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          ref={inputRef}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder={`Message #${activeTopic}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          {" "}
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

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
    border-radius: 5px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;

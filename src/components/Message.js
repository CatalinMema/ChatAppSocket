import React from "react";
import styled from "styled-components";
function Message({ message, user, userImage }) {
  return (
    <MessageContainer>
        <h4>{user}</h4>
        <h3>{message}</h3>
      
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > h4 {
    color: gray;
    font-weight: 300;
    margin-right: 4px;
    font-size: 1.2em;
  }
  > h3 {
    background-color: lightgray;
    border-radius: 25%;
    padding: 0.2em;
    font-weight: 600;
    margin-right: 4px;
    font-size: 1.2em;
  }
`;



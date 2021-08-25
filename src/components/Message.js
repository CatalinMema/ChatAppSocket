import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store/Store";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#3e4042",
  },
}));

function Message({ message, name }) {
  const classes = useStyles();
  const { user } = useContext(Context);
  console.log(user);
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user.toLowerCase() === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <MessageContainerCurrentUser>
      <MessageBoxCurrentUser>
        <MessageText>{message}</MessageText>
      </MessageBoxCurrentUser>
    </MessageContainerCurrentUser>
  ) : (
    <MessageContainerOtherUser>
      <Avatar aria-label="recipe" className={classes.avatar}>
        {name[0].toUpperCase()}
      </Avatar>
      <MessageBoxOtherUser>
        <MessageText>{message}</MessageText>
      </MessageBoxOtherUser>
    </MessageContainerOtherUser>
  );
}

export default Message;

const MessageContainerCurrentUser = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5em;
`;
const MessageContainerOtherUser = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 5em;
`;

const MessageBoxCurrentUser = styled.div`
  background: teal;
  border-radius: 1em;
  padding: 5px 20px;
  color: white;
  max-width: 80%;
  margin-bottom: 0.5em;
`;

const MessageBoxOtherUser = styled.div`
  background: #3e4042;
  border-radius: 1em;
  padding: 5px 20px;
  color: white;
  margin-left: 0.5em;
  max-width: 80%;
  margin-bottom: 0.5em;
`;

const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
`;

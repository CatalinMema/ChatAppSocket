import styled from "styled-components";
import React, { useContext, useEffect, useRef, useState } from "react";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import { Context } from "../store/Store";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Message from "./Message";
import ChatInput from "./ChatInput";
function AppBody() {
  const { allChats, user, dispatch } = useContext(Context);
  const topics = Object.keys(allChats);
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const selectChannel = (e) => {
    e.preventDefault();
    setActiveTopic(e.target.innerText);
  };
  const chatRef = useRef(null);
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      dispatch({
        type: "ADD_CHANNEL",
        payload: { name: channelName },
      });
    }
  };

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [activeTopic]);
  return (
    <>
      <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <h3>
              <FiberManualRecord />
              {user}
            </h3>
          </SidebarInfo>
          <CreateIcon />
        </SidebarHeader>
        <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
       
        {topics.map((topic) => (
          <SidebarOption onClick={selectChannel} key={topic} title={topic} />
        ))}
         <SidebarOption
          onClick={addChannel}
          Icon={AddIcon}
          addChannelOption
          title="Add channel"
        />
      </SidebarContainer>
      <ChatContainer>
        <Header>
          <HeaderLeft>
            <h3>Chat room: {activeTopic}</h3>
          </HeaderLeft>
        </Header>
        <ChatMessages>
          {allChats[activeTopic]?.map((message, index) => {
            return (
              <Message key={index} message={message.msg} user={message.from} />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput
          chatRef={chatRef}
          activeTopic={activeTopic}
          from={user}
          // channelName={roomDetails?.data().name}
        />
      </ChatContainer>
    </>
  );
}

export default AppBody;

const SidebarContainer = styled.div`
  color: white;
  flex: 0.3;
  border-bottom: 1px solid white;
  background-color: #1c1e21;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;

const ChatMessages = styled.div``;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.1em;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-left: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 10px;
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

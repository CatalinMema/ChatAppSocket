import React, { createContext, useReducer } from "react";
import io from "socket.io-client";
export const Context = createContext();

const initState = {
  Hello: [
    
  ],
  Today: [
    
  ],
};

function reducer(state, action) {
  const { from, msg, topic, name } = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg,
          },
        ],
      };
    case "ADD_CHANNEL":
      return {
        ...state,
        [name]: [],
      };
    default: {
      return state;
    }
  }
}

// const user = "aaron" + Math.random(100).toFixed(2);
let socket;
let user = prompt("Name");
function sendChatAction(value) {
  socket.emit("chat message", value);
}

function setUser(value) {
  user = value;
}

function Store(props) {
  const [allChats, dispatch] = useReducer(reducer, initState);
  console.log(allChats);
  if (!socket) {
    //cream o conexiune cu functia io si setam la portul 3001
    socket = io(":3001");
    socket.on("chat message", function (msg) {
      console.log({ msg });
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }

  return (
    <Context.Provider
      value={{ allChats, sendChatAction, setUser, user, dispatch }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Store;

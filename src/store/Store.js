import React, { createContext, useReducer } from "react";
import io from "socket.io-client";
export const Context = createContext();

const initState = {
  Hello: [],
  Today: [],
};

const initStateUser = {
  userName: "",
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
    case "ADD_USER":
      return {
        userName: action.payload.userName,
      };
    default: {
      return state;
    }
  }
}

let socket;

function sendChatAction(value) {
  socket.emit("chat message", value);
}

function Store(props) {
  const [allChats, dispatch] = useReducer(reducer, initState);
  const [userLogin, dispatchUser] = useReducer(reducer, initStateUser);

  if (!socket) {
    //cream o conexiune cu functia io si setam la portul 3001
    socket = io(":3001");
    socket.on("chat message", function (msg) {
      // console.log({ msg });
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }
  let user = userLogin.userName;
  return (
    <Context.Provider
      value={{
        allChats,
        sendChatAction,
        user,
        dispatch,
        dispatchUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Store;

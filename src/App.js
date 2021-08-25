import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import AppBody from "./components/AppBody";
import { Redirect, Route } from "react-router-dom";
import Home from "./components/Home";
import { useContext } from "react";
import { Context } from "./store/Store";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      {!user ? (
        <Redirect to="/" />
      ) : (
        <Route path="/chat" exact>
          {/* <Header />
      <Dashboard /> */}
          <Header />
          <AppContainer>
            <AppBody />
          </AppContainer>
        </Route>
      )}
      <Route path="/" exact>
        <Home />
      </Route>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

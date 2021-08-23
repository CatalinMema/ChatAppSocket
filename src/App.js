import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import AppBody from "./components/AppBody";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Dashboard /> */}
      <Header />
      <AppContainer>
        <AppBody />
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login/Login";

function App() {
  // const [user, loading] = useAuthState(auth);

  // if (loading) {
  //   return <>Loading...</>;
  // }
  return (
    <div className="app">
      {/* {!user ? (
        <Login />
      ) : ( */}
      <>
        <Header />
        <AppBody>
          <SideBar />
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </AppBody>
      </>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./page/Home"));
const Login = lazy(() => import("./page/Login"));
const Chats = lazy(() => import("./page/Chats"));
const Groups = lazy(() => import("./page/Groups"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats/:chatId" element={<Chats />} />
        <Route path="/groups/:groupId" element={<Groups />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

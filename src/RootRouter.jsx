import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layout/Landing";
import AuthRouter from "./auth/router/AuthRouter";
import Dashboard from "./dashboard/components/Dashboard";
import ProfileRouter from "./profiles/router/ProfileRouter";
import PostRouter from "./posts/router/PostRouter";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth/*" element={<AuthRouter />}></Route>
        <Route path = "/dashboard/*" element = {<Dashboard/>}></Route>
        <Route path = "/profile/*" element = {<ProfileRouter/>}></Route>
        <Route path = "/posts/*" element = {<PostRouter/>}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;

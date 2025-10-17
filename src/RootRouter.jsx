import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layout/Landing";
import AuthRouter from "./auth/router/AuthRouter";
import Dashboard from "./dashboard/components/Dashboard";
import ProfileRouter from "./profiles/router/ProfileRouter";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth/*" element={<AuthRouter />}></Route>
        <Route path = "/dashboard/*" element = {<Dashboard/>}></Route>
        <Route path = "/profile/*" element = {<ProfileRouter/>}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layout/Landing";
import AuthRouter from "./auth/router/AuthRouter";
import Dashboard from "./dashboard/components/Dashboard";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth/*" element={<AuthRouter />}></Route>
        <Route path = "/dashboard/*" element = {<Dashboard/>}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;

import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import $ from "jquery";

import { Home } from "./Pages";

import { companyInfo } from "../../data/global/data";

const Layout = () => {
  let companyName = companyInfo[0].companyName;
  $(document).ready(function () {
    $("#open").css({ display: "none" });
    $("#close")
      .unbind()
      .click(function () {
        $("#notification").css({ bottom: "-45px" });
        $("#open").css({
          top: "-50%",
          display: "block",
          position: "absolute",
        });
      });
    $("#open")
      .unbind()
      .click(function () {
        $("#notification").css({ bottom: "0" });
        $("#open").css({
          display: "none",
        });
      });
  });
  return (
    <>
      <div className="container">
        <h1 className="container__notification" id="notification">
          <button id="close">X</button>
          <button id="open">=</button>
          This is NOT the real website for {companyName}
        </h1>
        <Outlet />
      </div>
    </>
  );
};
const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export { Layout, Path };

import { Route, Routes } from "react-router";
import React from "react";
import NavBarComponent from "./NavBarComponent";
import AddEventComponent from "./eventCreate/AddEventComponent";

function AppContainer() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBarComponent />
            </>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <>
              <NavBarComponent />
              <AddEventComponent />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default AppContainer;

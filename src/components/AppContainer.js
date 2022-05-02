import { Route, Routes } from "react-router";
import React from 'react'
import NavBarComponent from "./NavBarComponent";

function AppContainer() {
  return (
      <>
      <Routes>
          <Route 
            path="/"
            element={
                <NavBarComponent />
            }
          >

          </Route>
      </Routes>
      </>
  )
}

export default AppContainer
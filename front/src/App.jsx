import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Landing from "./pages/Landing";

function App() {

  
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/offres/:id" element={<Annonce />}></Route>
        {/* Redirect to Error page*/}
        <Route path="/error" element={<Error />}></Route>
        <Route path="*" element={<Navigate to="/error" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import React from "react";
import {BrowserRoute, Routes, Route} from "react-router-dom";


function App() {

  
	return (
    <BrowserRoute>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRoute>
  )
}

export default App;

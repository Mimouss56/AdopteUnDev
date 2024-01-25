import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Annonce from "./pages/Annonce";
import AuthPage from "./pages/AuthPage";
import Error from "./pages/Error";
import Landing from "./pages/Landing";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />}></Route>
				<Route path="/auth" element={<AuthPage />}></Route>
				<Route path="/offres/:id" element={<Annonce />}></Route>
				{/* Redirect to Error page*/}
				<Route path="/error" element={<Error />}></Route>
				<Route path="*" element={<Navigate to="/error" />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

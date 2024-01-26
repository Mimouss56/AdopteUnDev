import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./context/privateRoute";
import AuthPage from "./pages/AuthPage";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import FranceTravail from "./pages/dashboard/FranceTravail";
import Tech from "./pages/dashboard/Tech";

import useUserStore from "./stores/user.store";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />}></Route>
				<Route path="/auth" element={<AuthPage />}></Route>
				<Route
					path="/dashboard/*"
					element={
						<PrivateRoute>
							<DashboardRoutes />
						</PrivateRoute>
					}
				/>
				{/* Redirect to Error page*/}
				<Route path="/error" element={<Error />}></Route>
				<Route path="*" element={<Navigate to="/error" />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

const DashboardRoutes = () => {
	const user = useUserStore((state) => state.user);
	return (
		<Routes>
			{/* 
			{user.role.label === "rh" ? (
				<Route path="/rh" element={<RH />} />
			) : user.role.label === "tech" ? (
				<Route path="/tech" element={<Tech />} />
			) : user.role.label === "ft" ? (
				<Route path="/francetravail" element={<FranceTravail />} />
			) : (
				<Route path="/candidat" element={<Dashboard />} />
			)}*/}
			<Route path="/tech" element={<Tech role="tech" />} />
			<Route
				path="/francetravail"
				element={<FranceTravail role="ft" />}
			/>
			<Route index element={<AuthPage />} />
		</Routes>
	);
};

export default App;

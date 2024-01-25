import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../stores/user.store";

const privateRoute = ({ children }) => {
	const store = useUserStore();

	useEffect(() => {
		store.loginWithToken();

		if (!store.isAuthentified & !store.isloading) {
			<Navigate to="/auth" />;
		}
	}, [store.isLoading]);

	return children;
};

export default privateRoute;

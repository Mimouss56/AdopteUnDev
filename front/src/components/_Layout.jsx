import React from "react";
import Navigation from "./Navigation";

const _Layout = ({ children, role }) => {
	return (
		<div className="h-screen flex">
			<Navigation role={role} />
			{children}
		</div>
	);
};

export default _Layout;

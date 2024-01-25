import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
	const variantClasses = {
		primary: "bg-indigo-700 hover:bg-indigo-500 text-white px-4 py-2",
		secondary: "bg-gray-500 hover:bg-gray-700 text-white px-4 py-2",
		link: "text-indigo-700 hover:text-indigo-500",
	};

	return (
		<button
			className={` rounded ${variantClasses[variant]} font-semibold`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

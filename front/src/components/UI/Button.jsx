import React from "react";

const Button = ({ children, variant = "primary", className, ...props }) => {
	const variantClasses = {
		primary:
			"bg-indigo-600 border-2 border-indigo-800 hover:bg-indigo-500 text-white px-4 py-2 hover:shadow-lg hover:shadow-indigo-800/30",
		secondary:
			"bg-gray-500/30 border-2 border-gray-500 hover:bg-gray-700 hover:text-white text-black px-4 py-2",
		link: "text-indigo-700 hover:text-indigo-500",
		add: "bg-green-500 hover:bg-green-600  border-2 border-green-600 text-white px-4 py-2 hover:shadow-lg hover:shadow-green-800/30",
		remove: "bg-red-500 hover:bg-red-600 border-2  border-red-600 text-white px-4 py-2 hover:shadow-lg hover:shadow-red-800/30",
	};

	return (
		<button
			className={` rounded ${variantClasses[variant]} font-semibold transition-all duration-200 ease-in-out ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

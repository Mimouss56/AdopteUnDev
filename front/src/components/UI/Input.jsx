import React from "react";

const Input = ({ label, variant = "default", ...props }) => {
	const variantClasses = {
		default:
			"border-gray-300 placeholder-shown:border-gray-300 placeholder-shown:border-t-gray-300",
		primary:
			"border-blue-500 focus:border-blue-700 placeholder-shown:border-blue-500 placeholder-shown:border-t-blue-500",
		error: "border-red-500 focus:border-red-700  placeholder-shown:border-red-500 placeholder-shown:border-t-red-500",
	};

	const variantLayoutClasses = {
		default: "before:border-gray-300 after:border-gray-300",
		primary: "after:border-blue-500 before:border-blue-500",
		error: "before:border-red-500 after:border-red-500",
	};

	return (
		<div className="relative w-full min-w-[200px] h-10">
			<input
				className={`peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border   border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-indigo-600 ${variantClasses[variant]}`}
				{...props}
				placeholder=" "
			/>
			<label
				className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-border-indigo-600  peer-focus:before:!border-indigo-600  peer-focus:after:!border-indigo-600 ${variantLayoutClasses[variant]} `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;

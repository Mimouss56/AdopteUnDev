import React from "react";

const Categories = ({ title, children }) => {
	return (
		<ul className="flex flex-col w-full items-center justify-center p-2 bg-white rounded-lg">
			<li className="font-bold underline text-xl">{title}</li>
			{children}
		</ul>
	);
};

export default Categories;

import React from "react";

const Categories = ({ title, children }) => {
	return (
		<ul className="flex flex-col w-full h-full cursor-pointer items-center justify-center p-2 bg-white hover:shadow-hover-inset rounded-lg">
			<li className="font-bold underline">{title}</li>
			{children}
		</ul>
	);
};

export default Categories;

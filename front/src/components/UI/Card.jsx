import React from "react";

function Card({ children }) {
	return (
		<>
			<div className=" p-10 px-10 bg-white relative mb-4 rounded-lg text-slate-200 before:card-background flex flex-col justify-center items-center shadow-md shadow-black/10">
				{children}
			</div>
		</>
	);
}

export default Card;

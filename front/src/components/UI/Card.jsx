import React from "react";

function Card({ children }) {
	return (
		<>
			<div className="bg-white relative rounded-lg before:card-background flex flex-col justify-center items-center shadow-md shadow-black/10">
				{children}
			</div>
		</>
	);
}

export default Card;

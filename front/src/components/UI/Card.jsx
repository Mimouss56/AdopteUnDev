import React from "react";

function Card({ className, children }) {
	return (
		<>
			<div
				className={`bg-white relative rounded-lg before:card-background flex flex-col justify-start items-center shadow-md shadow-black/10 ${className} `}
			>
				{children}
			</div>
		</>
	);
}

export default Card;

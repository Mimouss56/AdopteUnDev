import React from "react";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";

const AuthPage = () => {
	return (
		<div className="bg-slate-300 h-screen w-screen flex flex-col justify-center items-center ">
			<Card>
				<Input label="Email" type="email" />
				<Input label="Password" type="password" />
			</Card>
		</div>
	);
};

export default AuthPage;

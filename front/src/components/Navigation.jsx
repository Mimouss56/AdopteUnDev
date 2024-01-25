import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import useUserStore from "../stores/user.store";

const Navigation = () => {
	const user = useUserStore((store) => {
		store.user;
	});

	return (
		<aside className="w-60 h-full flex flex-col justify-between bg-slate-200 p-2">
			<button className="p-2 w-full h-[50px] bg-white rounded-lg hover:shadow-hover-inset">
				<NavLink
					to="/"
					className="w-full h-full flex items-center gap-7"
				>
					<img src={logo} alt="Logo Adopte un tech" width="44px" />
					Accueil
				</NavLink>
			</button>
			<nav className="w-full h-full  "></nav>
			<button className="flex flex-col items-center justify-around p-2 w-full h-[58px] bg-white rounded-lg hover:shadow-hover-inset">
				{/* <em>{user.firstname + " " + user.lastname}</em>
				<p>{user.role} - {entreprise.name}</p> */}
				<b>Michel Durand</b>
				<p className="text-sm ">Rh - Open</p>
			</button>
		</aside>
	);
};

export default Navigation;

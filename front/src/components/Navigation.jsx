import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DataRoute from "../utils/NavRoute.json";

const Navigation = ({ role }) => {
	// const user = useUserStore((store) => {
	// 	store.user;
	// });
	const renderNav = () => {
		return (
			<>
				{DataRoute.map((route) => {
					if (role === route.role) {
						return (
							<div className="py-2" key={route.CategorieName}>
								<div className="flex justify-center items-center ">
									<div className="h-1 w-full bg-gradient-to-r from-transparent to-indigo-700 rounded-full"></div>
									<p className="px-2 text-black font-semibold text-xl">
										<div>{route.CategorieName}</div>
									</p>
									<div className="h-1 w-full  bg-gradient-to-l from-transparent to-indigo-700 rounded-full"></div>
								</div>

								{route.sub.map((sub) => (
									<div
										key={sub.title}
										className="flex w-full text-center"
									>
										<NavLink
											to={sub.path}
											className="w-full hover:bg-indigo-700/30 hover:border-indigo-700 border-2 border-transparent text-medium p-1 rounded-lg"
										>
											{sub.title}
										</NavLink>
									</div>
								))}
							</div>
						);
					} else {
						return;
					}
				})}
			</>
		);
	};

	return (
		<aside className="w-60 h-full flex flex-col justify-between bg-slate-200 p-2 border-r-2 border-indigo-700">
			<button className="p-2 w-full h-[50px] bg-white rounded-lg ">
				<NavLink
					to="/"
					className="w-full h-full flex items-center gap-7"
				>
					<img src={logo} alt="Logo Adopte un tech" width="44px" />
					Accueil
				</NavLink>
			</button>

			<nav className="w-full h-full flex flex-col justify-start  gap-3  py-3">
				{renderNav()}
			</nav>
			<button className="flex flex-col items-center justify-around p-2 w-full h-[58px] bg-white rounded-lg ">
				{/* <em>{user.firstname + " " + user.lastname}</em>
				<p>{user.role.label} - {user.ent.label}</p> */}
				<b>Michel Durand</b>
				<p className="text-sm ">Rh - Open</p>
			</button>
		</aside>
	);
};

export default Navigation;

import React, { useState } from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import useUserStore from "../stores/user.store";

const AuthPage = () => {
	const [signIn, setSignIn] = useState(false);
	const [isEnterprise, setIsEnterprise] = useState(false);

	const store = useUserStore();

	const [error] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		passwordConfirm: "",
		siret: "",
		idRole: 2,
	});

	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		passwordConfirm: "",
		siret: "",
		idRole: 2,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	const validateForm = () => {
		return true;
	};

	const handleSubmit = () => {
		if (validateForm()) {
			// si ce n'est pas une entreprise n'envois pas le siret ni le role
			if (!isEnterprise) {
				delete user.siret;
				delete user.role;
			}
			store.register(user);
			console.log(user);
		}
	};

	const handleSubmitLogin = () => {
		delete user.firstName;
		delete user.lastName;
		delete user.username;
		delete user.passwordConfirm;
		delete user.siret;
		delete user.role;
		if (validateForm()) {
			store.login(user.email, user.password);
		}
	};

	return (
		<div className="bg-slate-300  h-screen w-screen flex flex-col justify-center items-center relative ">
			<Card>
				<div className=" w-96">
					<div className="flex flex-col gap-6 p-10">
						{signIn ? (
							<>
								<h1 className="text-2xl font-bold text-center text-black">
									Inscription
								</h1>
								<Input
									label="Prénom"
									type="text"
									name="firstName"
									value={user.firstName}
									onChange={handleChange}
									required
									variant="primary"
									error={error.firstName}
								/>
								<Input
									label="Nom"
									type="text"
									name="lastName"
									value={user.lastName}
									onChange={handleChange}
									required
									variant="primary"
									error={error.lastName}
								/>
								<Input
									label="Pseudo"
									type="text"
									name="username"
									value={user.username}
									onChange={handleChange}
									required
									variant="primary"
									error={error.username}
								/>
								<Input
									label="Email"
									type="email"
									name="email"
									value={user.email}
									onChange={handleChange}
									required
									variant="primary"
									error={error.email}
								/>
								<Input
									label="Mot de passe"
									type="password"
									name="password"
									value={user.password}
									onChange={handleChange}
									required
									variant="primary"
									error={error.password}
								/>
								<Input
									label="Confirmer mot de passe"
									type="password"
									name="passwordConfirm"
									value={user.passwordConfirm}
									onChange={handleChange}
									required
									variant="primary"
									error={error.passwordConfirm}
								/>
								{isEnterprise && (
									<>
										<Input
											label="Siret"
											type="number"
											pattern="^\d{14}$"
											name="siret"
											value={user.siret}
											onChange={handleChange}
											required
											variant="primary"
											error={error.siret}
										/>
										<select
											className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-500 focus:border-blue-700 placeholder-shown:border-blue-500 placeholder-shown:border-t-blue-500"
											name="idRole"
											value={user.idRole}
											onChange={handleChange}
										>
											<option value="tech">Tech</option>
											<option value="rh">RH</option>
										</select>
									</>
								)}

								<p>
									{isEnterprise
										? "Vous êtes un particulier ? "
										: "Vous êtes une entreprise ? "}
									<Button
										variant="link"
										onClick={() =>
											setIsEnterprise(!isEnterprise)
										}
									>
										Cliquez ici
									</Button>
								</p>

								<div className="flex justify-between items-center">
									<Button
										variant="secondary"
										onClick={() => setSignIn(!signIn)}
									>
										Se connecter
									</Button>
									<Button
										variant="primary"
										onClick={handleSubmit}
									>
										S&apos;inscrire
									</Button>
								</div>

								<div className="flex justify-center items-center">
									<div className="h-1 w-full bg-gradient-to-r from-white to-indigo-700"></div>
									<p className="px-2 text-black"> OU </p>
									<div className="h-1 w-full  bg-gradient-to-l from-white to-indigo-700"></div>
								</div>

								<Button variant="primary">
									S&apos;inscrire avec FranceConnect
								</Button>
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold text-center text-black">
									Inscription
								</h1>
								<Input
									label="Email"
									type="email"
									name="email"
									value={user.email}
									onChange={handleChange}
									error={error.email}
								/>
								<Input
									label="Mot de passe"
									type="password"
									name="password"
									value={user.password}
									onChange={handleChange}
									error={error.password}
								/>
								<div className="flex justify-between items-center">
									<Button
										variant="secondary"
										onClick={() => setSignIn(!signIn)}
									>
										S&apos;inscrire
									</Button>
									<Button
										variant="primary"
										onClick={handleSubmitLogin}
									>
										Se connecter
									</Button>
								</div>

								<div className="flex justify-center items-center">
									<div className="h-1 w-full bg-gradient-to-r from-white to-indigo-700"></div>
									<p className="px-2 text-black"> OU </p>
									<div className="h-1 w-full  bg-gradient-to-l from-white to-indigo-700"></div>
								</div>

								<Button variant="primary">
									Se connecter avec FranceConnect
								</Button>
							</>
						)}
					</div>
				</div>
			</Card>
		</div>
	);
};

export default AuthPage;

import React, { useState } from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";

const AuthPage = () => {
	const [signIn, setSignIn] = useState(false);
	const [isEnterprise, setIsEnterprise] = useState(false);
	const [isTech, setIsTech] = useState(false);
	const [isRH, setIsRH] = useState(false);

	const handleSubmit = () => {
		console.log("submit");
	};

	return (
		<div className="bg-slate-300  h-screen w-screen flex flex-col justify-center items-center ">
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
									required
									variant="primary"
								/>
								<Input
									label="Nom"
									type="text"
									required
									variant="primary"
								/>
								<Input
									label="Pseudo"
									type="text"
									required
									variant="primary"
								/>
								<Input
									label="Email"
									type="email"
									required
									variant="primary"
								/>
								<Input
									label="Mot de passe"
									type="password"
									required
									variant="primary"
								/>
								<Input
									required
									variant="primary"
									label="Confirmer mot de passe"
									type="password"
								/>

								{isEnterprise && (
									<>
										<Input
											required
											variant="primary"
											label="Siret"
											type="number"
											pattern="^\d{14}$"
										/>

										<select className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border focus:border-2  text-sm px-3 py-2.5 rounded-[7px]   border-blue-500 focus:border-blue-700 placeholder-shown:border-blue-500 placeholder-shown:border-t-blue-500">
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
									</Button>{" "}
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
										S'inscrire
									</Button>
								</div>

								<div className="flex justify-center items-center">
									<div className="h-1 w-full bg-gradient-to-r from-white to-indigo-700"></div>
									<p className="px-2 text-black"> OU </p>
									<div className="h-1 w-full  bg-gradient-to-l from-white to-indigo-700"></div>
								</div>

								<Button variant="primary">
									S'inscrire avec FranceConnect
								</Button>
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold text-center text-black">
									Inscription
								</h1>
								<Input label="Email" type="email" />
								<Input label="Mot de passe" type="password" />

								<div className="flex justify-between items-center">
									<Button
										variant="secondary"
										onClick={() => setSignIn(!signIn)}
									>
										Se connecter
									</Button>

									<Button variant="primary">
										{signIn ? "S'inscrire" : "Se connecter"}
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

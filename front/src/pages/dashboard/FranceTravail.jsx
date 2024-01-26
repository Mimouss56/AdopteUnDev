import React from "react";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Layout from "../../components/_Layout";

const FranceTravail = ({ role }) => {
	return (
		<Layout role={role}>
			<div className="flex flex-wrap w-full h-full bg-slate-200">
				<div className="flex flex-col w-1/3 h-1/2 p-2 pt-4 pl-4">
					<Card className="h-full w-full">
						<div className="flex flex-col h-full p-4 gap-6 ">
							<h2 className="font-semibold text-center">
								Gestion des Compétences
							</h2>

							<div className="flex flex-col h-full justify-between">
								<Button variant="secondary">React</Button>
								<Button variant="secondary">VueJS</Button>
								<Button variant="secondary">Angular</Button>
								<Button variant="secondary">SCSS</Button>
							</div>

							<div className="flex gap-4 items-center">
								<Input label="Chercher" />
								<Button>Créer</Button>
							</div>
						</div>
					</Card>
				</div>
				<div className="flex flex-col w-1/3 h-1/2 p-2 pt-4 pl-4">
					<Card className="h-full w-full">
						<div className="flex flex-col h-full p-4 gap-6 ">
							<h2 className="font-semibold text-center">
								Gestion des Tâches
							</h2>

							<div className="flex flex-col h-full justify-between">
								<Button variant="secondary">useEffect</Button>
								<Button variant="secondary">UseContext</Button>
								<Button variant="secondary">Keyframes</Button>
								<Button variant="secondary">Hooks</Button>
							</div>

							<div className="flex gap-4 items-center">
								<Input label="Chercher" />
								<Button>Créer</Button>
							</div>
						</div>
					</Card>
				</div>
				<div className="flex flex-col w-1/3 h-1/2 p-2 pt-4 pr-4 gap-4">
					<Card className="h-full w-full">
						<div className="flex flex-col w-full h-full items-center text-center pt-2">
							<h2 className="font-semibold">Offres</h2>
							Affiche les .. dernières offres publiées
						</div>
					</Card>
					<Card className="h-full w-full">
						<div className="flex flex-col w-full h-full items-center text-center pt-2">
							<h2 className="font-semibold">Entreprises</h2>
							Affiche les .. dernières entreprises inscrites (nom)
						</div>
					</Card>
					<Card className="h-full w-full">
						<div className="flex flex-col w-full h-full items-center text-center pt-2">
							<h2 className="font-semibold">
								Demandeurs d'emploi
							</h2>
							Affiche les .. derniers demandeurs d'emploi inscrit
						</div>
					</Card>
				</div>
				<div className="flex w-full h-1/2 pt-2 px-4 pb-4">
					<Card className="h-full w-full">
						<div className=" flex flex-col justify-center items-center w-full gap-4 p-4">
							<h2 className="text-xl font-semibold">
								Gestion des arbres de compétences
							</h2>
							<div className="flex gap-4 w-full">
								<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center">
									<h3 className="text-xl font-semibold">
										Arbres de compétences de FranceTravail
									</h3>
								</div>
								<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center">
									<div className="flex justify-between items-center w-full">
										<h3 className="text-xl font-semibold">
											Arbres de compétences des
											entreprises
										</h3>
										<Button onClick={() => {}}>
											Créer un arbre
										</Button>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</Layout>
	);
};

export default FranceTravail;

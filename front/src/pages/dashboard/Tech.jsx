import React from "react";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Layout from "../../components/_Layout";

import { useState } from "react";
import Input from "../../components/UI/Input";

const CreationTree = ({ isOpen, onClose }) => {
	const [skills, setSkills] = useState(["Node", "React"]);
	const [inputValue, setInputValue] = useState("");

	const addSkill = (skill) => {
		if (skill && !skills.includes(skill)) {
			setSkills([...skills, skill]);
		}
		setInputValue("");
	};

	const removeSkill = (skillToRemove) => {
		setSkills(skills.filter((skill) => skill !== skillToRemove));
	};

	return (
		<div
			className={`flex flex-col p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto my-8 overflow-hidden min-w-[35%] gap-4  ${
				isOpen ? " scale-100 " : "scale-0"
			} transition-all duration-500 ease-in-out`}
		>
			<h1 className="text-2xl font-bold mb-4">
				Création d'un arbre de compétence
			</h1>
			<Input label="Nom de l'arbre" />
			<div className="mb-4">
				<Input
					label="Recherche hardskill"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyPress={(e) =>
						e.key === "Enter" && addSkill(inputValue)
					}
				/>
				<div className="flex mt-2">
					{/* Dummy suggestions */}
					{["Sql", "Sql"].map((suggestion, index) => (
						<div key={index} className="flex items-center mx-1">
							<div
								className="p-2 bg-green-200 rounded w-32"
								readOnly
							>
								{suggestion}
							</div>
							<Button
								variant="add"
								onClick={() => {
									addSkill(suggestion);
								}}
							>
								✓
							</Button>
						</div>
					))}
				</div>
			</div>
			<div className="mb-4">
				<h2 className="font-semibold mb-2">Mes compétences ajoutées</h2>
				<div className="flex flex-wrap">
					{skills.map((skill) => (
						<div key={skill} className="flex items-center m-1">
							<div className="bg-gray-200 rounded p-2">
								{skill}
							</div>
							<Button
								variant="remove"
								onClick={() => removeSkill(skill)}
							>
								✕
							</Button>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between">
				<Button variant="secondary" onClick={onClose}>
					Annuler
				</Button>
				<Button>Valider</Button>
			</div>
		</div>
	);
};

const Tech = ({ role }) => {
	const [addModal, setAddModal] = useState(false);
	return (
		<Layout role={role}>
			<div
				className={`absolute inset-0 flex justify-center items-center z-[999] ${
					addModal
						? "backdrop-blur-lg bg-slate-800/50"
						: "pointer-events-none"
				} transition-all duration-200 ease-in-out`}
			>
				<div
					className="h-screen w-screen  absolute"
					onClick={() => {
						setAddModal(false);
					}}
				></div>
				<CreationTree
					isOpen={addModal}
					onClose={() => {
						setAddModal(false);
					}}
				/>
			</div>

			<div className="h-full w-full bg-slate-200 flex gap-4 flex-col p-4">
				<div className="flex w-full h-1/2">
					<Card className="h-full w-full">
						<div className=" flex flex-col justify-center items-center w-full gap-4 p-4">
							<h2 className="text-xl font-semibold">
								Gestion des arbres de compétences
							</h2>
							<div className="flex gap-4 w-full">
								<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center">
									<h3 className="text-xl font-semibold">
										Arbre de FranceTravail
									</h3>
								</div>
								<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center">
									<div className="flex justify-between items-center w-full">
										<h3 className="text-xl font-semibold">
											Arbre de votre entreprise
										</h3>
										<Button
											onClick={() => {
												setAddModal(true);
											}}
										>
											Créer un arbre
										</Button>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<div className="flex justify-between gap-4 h-full">
					<div className="flex flex-col w-full h-full">
						<Card className="h-full w-full">
							<div className=" flex flex-col justify-start items-center w-full p-4">
								<h2 className="text-xl font-semibold">
									Gestion des Compétences
								</h2>
								<div className="flex flex-col gap-4 w-full p-4">
									<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center">
										<h3 className="text-xl font-semibold">
											Compétences de FranceTravail
										</h3>
									</div>
									<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center ">
										<div className="flex justify-between items-center w-full">
											<h3 className="text-xl font-semibold">
												Compétences de votre entreprise
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
					<div className="flex flex-col w-full h-full">
						<Card className="h-full w-full">
							<div className=" flex flex-col justify-center items-center w-full p-4">
								<h2 className="text-xl font-semibold">
									Gestion des tâches
								</h2>
								<div className="flex flex-col gap-4 w-full p-4">
									<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center">
										<h3 className="text-xl font-semibold">
											Tâches de FranceTravail
										</h3>
									</div>
									<div className="bg-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-center ">
										<div className="flex justify-between items-center w-full">
											<h3 className="text-xl font-semibold">
												Tâches de votre entreprise
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
			</div>
		</Layout>
	);
};

export default Tech;

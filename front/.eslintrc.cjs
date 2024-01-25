module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		node: true, // Ajouté pour une meilleure intégration avec l'environnement Node.js
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],

	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: ["react", "react-hooks"],
	rules: {
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react-hooks/rules-of-hooks": "off",
	},
	ignorePatterns: ["dist", "node_modules", ".eslintrc.js"],
};

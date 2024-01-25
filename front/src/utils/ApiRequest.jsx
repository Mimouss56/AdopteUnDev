import Axios from "axios";
import Cookies from "js-cookie";

export const ApiRequest = Axios.create({
	baseURL: "http://localhost:5173",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		Authorization: "Bearer " + Cookies.get("access_token") || null,
	},
});

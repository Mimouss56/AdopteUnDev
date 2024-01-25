import Cookies from "js-cookie";
import { create } from "zustand";
import { ApiRequest } from "../utils/ApiRequest";

const useUserStore = create((set, get) => ({
	user: null,
	isAuthentified: false,
	isLoading: true,

	setUser: (user) => set({ user }),

	logout: () => set({ user: null }),

	handleApiResponse: (response, isLogin = false) => {
		const data = response.data;

		if (data.token) {
			set({ user: data.user, isAuthentified: true });
			Cookies.set("access_token", data.token);
			
			// navigate to dashboard
			if (isLogin) {
				set({ isLoading: false });
			}
			return true;
		} else {
			// send error toast
			return false;
		}
	},

	handleError: (error) => {
		// send error toast
		console.error(error);
		return false;
	},

	login: async (email, password) => {
		try {
			const response = await ApiRequest.post("/users/login", {
				email,
				password,
			});
			return get().handleApiResponse(response, true);
		} catch (error) {
			return get().handleError();
		}
	},

	register: async (dataUser) => {
		try {
			const response = await ApiRequest.post("/users/register", dataUser);
			return get().handleApiResponse(response);
		} catch (error) {
			return get().handleError();
		}
	},

	loginWithToken: async () => {
		try {
			const response = await ApiRequest.get("/users/me");
			return get().handleApiResponse(response, true);
		} catch (error) {
			return get().handleError();
		}
	},
}));

export default useUserStore;

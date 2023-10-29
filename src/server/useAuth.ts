import axios from "axios";
const url = import.meta.env.VITE_AUTH_URL;

export const useAuth = () => {
	const errorHandler = (error: any) => {
		console.log(error);
		return {
			success: false,
			serverError: true,
			message: "Internal server error",
		};
	};
	const signUp = async (email: string, password: string) => {
		try {
			const { data } = await axios.post(`${url}/signup`, { email, password });
			if (data.success) localStorage.setItem("token", data.token);
			return {
				success: data.success,
				message: data.message,
				serverError: false,
			};
		} catch (error) {
			return errorHandler(error);
		}
	};
	const verifyToken = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return { success: false, message: "Missing token" };
			const { data } = await axios.get(`${url}/verifyToken/${token}`);
			if (!data.success) localStorage.removeItem("token");
			return {
				success: data.success,
				message: data.message,
				serverError: false,
			};
		} catch (error) {
			return errorHandler(error);
		}
	};
	const signIn = async (email: string, password: string) => {
		try {
			const { data } = await axios.get(`${url}/signin/${email}/${password}`);
			if (data.success) localStorage.setItem("token", data.token);
			return {
				success: data.success,
				message: data.message,
				serverError: false,
			};
		} catch (error) {
			return errorHandler(error);
		}
	};
	return {
		signUp,
		verifyToken,
		signIn,
	};
};

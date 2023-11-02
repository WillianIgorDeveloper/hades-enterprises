import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { errorHandler } from "./errorHandler";
const url = import.meta.env.VITE_AUTH_URL;

export const signUp = async (email: string, password: string) => {
	try {
		const {
			data: { success, message, token },
		} = await axios.post(`${url}/signup`, { email, password });
		if (success) localStorage.setItem("token", token);
		else toast({ title: message });
		return { success };
	} catch (error) {
		return errorHandler(error);
	}
};

export const signIn = async (email: string, password: string) => {
	try {
		const {
			data: { success, message, token },
		} = await axios.get(`${url}/signin/${email}/${password}`);
		if (success) localStorage.setItem("token", token);
		else toast({ title: message });
		return { success };
	} catch (error) {
		return errorHandler(error);
	}
};

export const verifyToken = async (token: string) => {
	try {
		const {
			data: { success },
		} = await axios.get(`${url}/verifyToken/${token}`);
		if (!success) localStorage.removeItem("token");
		return { success };
	} catch (error) {
		return errorHandler(error);
	}
};

import { toast } from "@/components/ui/use-toast";
import axios from "axios";
const url = import.meta.env.VITE_AUTH_URL;

export const useAuth = () => {
	const errorHandler = (error: any) => {
		console.log(error);
		toast({ title: "Internal server error", variant: "destructive" });
		return { success: false };
	};
	const signUp = async (email: string, password: string) => {
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
	const verifyToken = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return { success: false };
			const {
				data: { success },
			} = await axios.get(`${url}/verifyToken/${token}`);
			if (!success) localStorage.removeItem("token");
			return { success };
		} catch (error) {
			return errorHandler(error);
		}
	};
	const signIn = async (email: string, password: string) => {
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
	return {
		signUp,
		verifyToken,
		signIn,
	};
};

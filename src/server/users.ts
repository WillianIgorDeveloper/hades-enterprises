import { toast } from "@/components/ui/use-toast";
import axios from "axios";
const url = import.meta.env.VITE_USERS_URL;

const errorHandler = (error: any) => {
	console.log(error);
	toast({ title: "Internal server error", variant: "destructive" });
	return { success: false, data: null };
};

export const getUsers = async () => {
	try {
		const token = localStorage.getItem("token");
		if (!token) return { success: false };
		const {
			data: { success, data },
		} = await axios.get(`${url}/profile`, {
			headers: {
				authorization: token,
			},
		});
		return { success, data };
	} catch (error) {
		return errorHandler(error);
	}
};

import axios from "axios";
import { errorHandler } from "./errorHandler";
import { toast } from "@/components/ui/use-toast";
const url = import.meta.env.VITE_USERS_URL;

export const getUsers = async (token: string) => {
	try {
		const {
			data: { success, message, data },
		} = await axios.get(`${url}/profile`, {
			headers: {
				authorization: token,
			},
		});
		if (!success) toast({ title: message });
		return { success, data };
	} catch (error) {
		return errorHandler(error);
	}
};

export const createProfile = async (
	token: string,
	nickname: string,
	sectorId: string,
	companyOwner: string,
	companyName: string
) => {
	try {
		const {
			data: { success, message },
		} = await axios.post(
			`${url}/createProfile`,
			{
				nickname,
				sectorId,
				companyName: companyOwner === "yes" ? companyName : null,
			},
			{
				headers: {
					authorization: token,
				},
			}
		);
		if (!success) toast({ title: message });
		return { success };
	} catch (error) {
		return errorHandler(error);
	}
};

export const getSectors = async (token: string) => {
	try {
		const {
			data: { success, message, data },
		} = await axios.get(`${url}/sectors`, {
			headers: {
				authorization: token,
			},
		});
		if (!success) toast({ title: message });
		return { success, data };
	} catch (error) {
		return errorHandler(error);
	}
};

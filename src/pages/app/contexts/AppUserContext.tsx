import { useToken } from "@/hooks/useToken";
import { createProfile, getSectors, getUsers } from "@/server/users";
import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type User = {
	id: string;
	usersId: string;
	sectorId: string;
	nickname: string;
	sector: string;
	servicesCompanies: { id: string; name: string }[];
	ownerCopmanies: { id: string; name: string }[];
};

type AppUserContextType = {
	dataLoading: boolean;
	user: User | null;
	sectors: { id: string; name: string }[];
	handleCreateProfile: (
		token: string,
		nickname: string,
		sectorId: string,
		companyOwner: string,
		companyName: string
	) => Promise<{ success: boolean }>;
};

const AppUserContext = createContext({} as AppUserContextType);
export const AppUserProvider = ({ children }: { children: ReactNode }) => {
	const navegate = useNavigate();
	const getToken = useToken();
	const [dataLoading, setDataLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);
	const [sectors, setSectors] = useState([]);
	const handleCreateProfile = async (
		token: string,
		nickname: string,
		sectorId: string,
		companyOwner: string,
		companyName: string
	) => {
		const { success } = await createProfile(
			token,
			nickname,
			sectorId,
			companyOwner,
			companyName
		);
		if (success) {
			const { success, data } = await getUsers(token);
			if (success) setUser(data);
		}
		return { success };
	};
	useEffect(() => {
		const token = getToken();
		if (!token) return;
		(async () => {
			await (async () => {
				const { success, data } = await getUsers(token);
				console.log("🚀 ~ file: AppUserContext.tsx:37 ~ await ~ data:", data);
				if (success) {
					setUser(data);
					if (!data) navegate("/app/first-login", { replace: true });
				}
			})();
			await (async () => {
				const { success, data } = await getSectors(token);
				if (success) setSectors(data);
			})();
			setDataLoading(false);
		})();
	}, []);
	return (
		<AppUserContext.Provider
			value={{ dataLoading, user, sectors, handleCreateProfile }}
		>
			{children}
		</AppUserContext.Provider>
	);
};

export const useAppUser = () => {
	return useContext(AppUserContext);
};

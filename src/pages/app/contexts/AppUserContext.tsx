import { useToken } from "@/hooks/useToken";
import { getSectors, getUsers } from "@/server/users";
import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type User = {
	id: string;
	usersId: string;
	sectorId: string;
	nickname: string;
};

type AppUserContextType = {
	user: User | null | "loading";
	sectors: { id: string; name: string }[];
};

const AppUserContext = createContext({} as AppUserContextType);
export const AppUserProvider = ({ children }: { children: ReactNode }) => {
	const navegate = useNavigate();
	const getToken = useToken();
	const [user, setUser] = useState<User | null | "loading">("loading");
	const [sectors, setSectors] = useState([]);
	useEffect(() => {
		const token = getToken();
		if (!token) return;
		(async () => {
			const { success, data } = await getUsers(token);
			if (success) {
				setUser(data);
				if (!data) navegate("/app/first-login", { replace: true });
			}
		})();
		(async () => {
			const { success, data } = await getSectors(token);
			if (success) setSectors(data);
		})();
	}, []);
	return (
		<AppUserContext.Provider value={{ user, sectors }}>
			{children}
		</AppUserContext.Provider>
	);
};

export const useAppUser = () => {
	return useContext(AppUserContext);
};

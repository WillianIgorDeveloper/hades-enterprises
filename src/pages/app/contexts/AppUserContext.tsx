import { toast } from "@/components/ui/use-toast";
import { getUsers } from "@/server/users";
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
};

const AppUserContext = createContext({} as AppUserContextType);
export const AppUserProvider = ({ children }: { children: ReactNode }) => {
	const navegate = useNavigate();
	const [user, setUser] = useState<User | null | "loading">("loading");
	useEffect(() => {
		(async () => {
			const { success, data } = await getUsers();
			if (!success) {
				toast({ title: "Expired session, please login again" });
				navegate("/signin");
				return;
			}
			if (!data) {
				navegate("/app/first-login", { replace: true });
				return;
			}
			setUser(data);
		})();
	}, []);
	return <AppUserContext.Provider value={{ user }}>{children}</AppUserContext.Provider>;
};

export const useAppUser = () => {
	return useContext(AppUserContext);
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { App } from "./App";
import { GlobalLoader } from "@/components/GlobalLoader";
import { AppUserProvider } from "./contexts/AppUserContext";
import { verifyToken } from "@/server/auth";

export const AppMiddleware = () => {
	const navegate = useNavigate();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			const token = localStorage.getItem("token");
			if (!token) return navegate("/signin", { replace: true });
			const { success } = await verifyToken(token);
			if (success) setLoading(false);
		})();
	}, [navegate]);
	if (loading) return <GlobalLoader />;
	else
		return (
			<AppUserProvider>
				<App />
			</AppUserProvider>
		);
};

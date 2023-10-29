import { useAuth } from "@/server/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { App } from "./App";
import { GlobalLoader } from "@/components/GlobalLoader";

export const AppMiddleware = () => {
	const navegate = useNavigate();
	const { verifyToken } = useAuth();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			const { success } = await verifyToken();
			if (!success) navegate("/signin", { replace: true });
			else setLoading(false);
		})();
	}, [navegate]);
	if (loading) return <GlobalLoader />;
	else return <App />;
};

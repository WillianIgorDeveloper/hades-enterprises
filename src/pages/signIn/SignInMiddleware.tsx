import { useAuth } from "@/server/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalLoader } from "@/components/GlobalLoader";
import { SignIn } from "./SignIn";

export const SignInMiddleware = () => {
	const navegate = useNavigate();
	const { verifyToken } = useAuth();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			const { success } = await verifyToken();
			if (success) navegate("/app", { replace: true });
			else setLoading(false);
		})();
	}, [navegate]);
	if (loading) return <GlobalLoader />;
	else return <SignIn />;
};

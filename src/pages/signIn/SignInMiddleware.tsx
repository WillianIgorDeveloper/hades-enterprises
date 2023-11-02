import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalLoader } from "@/components/GlobalLoader";
import { SignIn } from "./SignIn";
import { verifyToken } from "@/server/auth";

export const SignInMiddleware = () => {
	const navegate = useNavigate();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			const token = localStorage.getItem("token");
			if (!token) return setLoading(false);
			const { success } = await verifyToken(token);
			if (success) navegate("/app", { replace: true });
			setLoading(false);
		})();
	}, [navegate]);
	if (loading) return <GlobalLoader />;
	else return <SignIn />;
};

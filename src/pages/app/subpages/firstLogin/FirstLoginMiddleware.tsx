import { GlobalLoader } from "@/components/GlobalLoader";
import { useAppUser } from "../../contexts/AppUserContext";
import { FirstLogin } from "./FirstLogin";
import { FirstLoginProvider } from "./contexts/FirstLoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const FirstLoginMiddleware = () => {
	const navegate = useNavigate();
	const { user } = useAppUser();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			if (user !== "loading" && !user) navegate("/app", { replace: true });
			else setLoading(false);
		})();
	}, [user]);
	if (loading) return <GlobalLoader />;
	else
		return (
			<FirstLoginProvider>
				<FirstLogin />
			</FirstLoginProvider>
		);
};

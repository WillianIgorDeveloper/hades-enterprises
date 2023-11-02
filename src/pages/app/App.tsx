import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useAppUser } from "./contexts/AppUserContext";
import { GlobalLoader } from "@/components/GlobalLoader";
import { useEffect, useState } from "react";

export const App = () => {
	const { dataLoading } = useAppUser();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (!dataLoading) setLoading(false);
	}, [dataLoading]);
	if (loading) return <GlobalLoader />;
	else
		return (
			<div className="pt-14 pb-2 px-2">
				<Navbar />
				<Outlet />
			</div>
		);
};

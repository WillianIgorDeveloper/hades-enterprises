import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
	return (
		<div className="pt-14 pb-2 px-2">
			<Navbar />
			<Outlet />
		</div>
	);
};

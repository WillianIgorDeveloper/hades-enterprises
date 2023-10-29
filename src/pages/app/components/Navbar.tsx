import { MenuSheet } from "./MenuSheet";

export const Navbar = () => {
	return (
		<div className="shadow w-full fixed top-0 left-0">
			<div className="container mx-auto p-3">
				<MenuSheet />
			</div>
		</div>
	);
};

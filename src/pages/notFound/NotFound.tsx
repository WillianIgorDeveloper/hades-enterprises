import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center gap-3">
			<h1 className="text-9xl font-black bg-brand-gradient text-transparent bg-clip-text">
				404
			</h1>
			<p>We couldn't find the page you were looking for.</p>
			<Button variant="link" className="inline">
				<Link to="/">Go back to the homepage.</Link>
			</Button>
		</div>
	);
};

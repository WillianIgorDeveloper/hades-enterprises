import { Loader2 } from "lucide-react";

export const GlobalLoader = () => {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-zinc-100 dark:bg-zinc-900">
			<div className="text-2xl font-bold flex flex-col gap-3 items-center">
				<Loader2 className="animate-spin" size={48} />
				Loading...
			</div>
		</div>
	);
};

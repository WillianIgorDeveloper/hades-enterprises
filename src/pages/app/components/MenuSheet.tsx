import { AlignLeft, LogOut, Settings } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAppUser } from "../contexts/AppUserContext";

export const MenuSheet = () => {
	const navegate = useNavigate();
	const { user } = useAppUser();
	return (
		<Sheet>
			<SheetTrigger>
				<AlignLeft />
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<SheetHeader className="flex flex-col items-center cursor-pointer">
					{user?.nickname === "Hades" && (
						<img src="./icon.png" alt="Profile icon" className="w-14" />
					)}
					<h2 className="font-semibold flex items-center gap-1">
						{user?.nickname} <Settings size={12} />
					</h2>
				</SheetHeader>
				<Separator />
				<ScrollArea className="flex-1">
					<div className="space-y-2">
						<div>
							<h3 className="text-lg font-semibold">Services</h3>
							<div className="p-2 space-y-2">
								{user?.servicesCompanies.length === 0 ? (
									<h4>No servicecs yet</h4>
								) : (
									user?.servicesCompanies.map((service) => (
										<h4 key={service.id}>{service.name}</h4>
									))
								)}
							</div>
						</div>
						<div>
							<h3 className="text-lg font-semibold">Companies</h3>
							<div className="p-2 space-y-2">
								{user?.ownerCopmanies.length === 0 ? (
									<h4>No companies yet</h4>
								) : (
									user?.ownerCopmanies.map((company) => (
										<h4 key={company.id}>{company.name}</h4>
									))
								)}
							</div>
						</div>
					</div>
				</ScrollArea>
				<SheetFooter>
					<Button
						variant="link"
						className="w-full flex items-center gap-3 text-red-500 dark:text-red-500"
						onClick={() => {
							localStorage.removeItem("token");
							navegate("/signin");
						}}
					>
						<LogOut /> Sign out
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

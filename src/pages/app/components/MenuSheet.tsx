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

export const MenuSheet = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<AlignLeft />
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<SheetHeader className="flex flex-col items-center cursor-pointer">
					<img src="./icon.png" alt="Profile icon" className="w-14" />
					<h2 className="font-semibold flex items-center gap-1">
						Hades <Settings size={12} />
					</h2>
				</SheetHeader>
				<Separator />
				<ScrollArea className="flex-1">
					<div className="space-y-2">
						<div>
							<h3 className="text-lg font-semibold">Services</h3>
							<div className="p-2 space-y-2">
								<h4>Atlas Chat</h4>
								<h4>Minotaur Tasks</h4>
							</div>
						</div>
						<div>
							<h3 className="text-lg font-semibold">Companies</h3>
							<div className="p-2 space-y-2">
								<h4>Olympus Hotel</h4>
								<h4>Pegasus Delivery</h4>
								<h4>Cerberus PetShop</h4>
							</div>
						</div>
					</div>
				</ScrollArea>
				<SheetFooter>
					<Button
						variant="link"
						className="flex items-center gap-3 text-red-500 dark:text-red-500"
					>
						<LogOut /> Sign out
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette, SunDim, Moon, MonitorDot } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
	const { toggleTheme } = useTheme();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Palette />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Theme</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => {
						toggleTheme("light");
					}}
					className="gap-3 hover:cursor-pointer"
				>
					<SunDim size={16} /> Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className="gap-3 hover:cursor-pointer"
					onClick={() => {
						toggleTheme("dark");
					}}
				>
					<Moon size={16} /> Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className="gap-3 hover:cursor-pointer"
					onClick={() => {
						toggleTheme("system");
					}}
				>
					<MonitorDot size={16} /> System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFirstLogin } from "../contexts/FirstLoginContext";
import { SectorsCombobox } from "./SectorsCombobox";

export const StepOne = () => {
	const { setStep, nickname, setNickname } = useFirstLogin();
	return (
		<Card>
			<CardHeader className="text-center">
				<CardTitle>Welcome!</CardTitle>
				<CardDescription>
					Tell us a little about yourself to get started
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				<div>
					<Label>what should we call you?</Label>
					<Input
						type="text"
						value={nickname}
						onChange={(e) => {
							setNickname(e.target.value);
						}}
					/>
				</div>
				<div>
					<Label>in which sector do you operate?</Label>
					<SectorsCombobox />
				</div>
			</CardContent>
			<CardFooter className="flex">
				<Button
					onClick={() => {
						setStep(2);
					}}
					className="ml-auto"
				>
					Next
				</Button>
			</CardFooter>
		</Card>
	);
};

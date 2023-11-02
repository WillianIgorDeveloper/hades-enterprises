import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFirstLogin } from "../contexts/FirstLoginContext";

export const StepTwo = () => {
	const { setStep } = useFirstLogin();
	return (
		<Card>
			<CardHeader className="text-center">
				<CardDescription>
					You are almost there, just one more step
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div>
					<Label>do you already own a company?</Label>
					<Input type="text" />
				</div>
			</CardContent>
			<CardFooter>
				<Button
					onClick={() => {
						setStep(1);
					}}
				>
					Back
				</Button>
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

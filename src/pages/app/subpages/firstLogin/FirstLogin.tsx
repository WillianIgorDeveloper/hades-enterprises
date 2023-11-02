import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GlobalLoader } from "@/components/GlobalLoader";
import { useAppUser } from "../../contexts/AppUserContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToken } from "@/hooks/useToken";

export const FirstLogin = () => {
	// -------- Hooks ---------
	const navegate = useNavigate();
	const getToken = useToken();
	const { dataLoading, user, sectors, handleCreateProfile } = useAppUser();
	// -------- States ---------
	const [loading, setLoading] = useState(true);
	const [nickname, setNickname] = useState("");
	const [sectorId, setSector] = useState("");
	const [companyOwner, setCompanyOwner] = useState("");
	const [companyName, setCompanyName] = useState("");
	// -------- Functions ---------
	const saveProfile = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const token = getToken();
		if (!token) return setLoading(false);
		const { success } = await handleCreateProfile(
			token,
			nickname,
			sectorId,
			companyOwner,
			companyName
		);
		if (success) navegate("/app", { replace: true });
		setLoading(false);
	};
	// -------- Effects ---------
	useEffect(() => {
		(async () => {
			if (dataLoading) return;
			if (!user) return setLoading(false);
			else {
				navegate("/app", { replace: true });
				setLoading(false);
				return;
			}
		})();
	}, [dataLoading]);
	if (loading) return <GlobalLoader />;
	else
		return (
			<div className="fixed z-40 w-full h-full top-0 left-0 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-3">
				<Card className="w-full min-w-[320px] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
					<CardHeader className="text-center">
						<CardTitle>Welcome!</CardTitle>
						<CardDescription>
							Tell us a little about yourself to get started
						</CardDescription>
					</CardHeader>
					<form onSubmit={saveProfile}>
						<CardContent className="space-y-3">
							<div className="space-y-1">
								<Label>What should we call you?</Label>
								<Input
									type="text"
									required
									value={nickname}
									onChange={(e) => {
										setNickname(e.target.value);
									}}
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="sector">
									In which sector do you operate?
								</Label>
								<Select
									required
									onValueChange={(e) => {
										setSector(e);
									}}
								>
									<SelectTrigger id="sector" className="w-full">
										<SelectValue placeholder="Select a sector" />
									</SelectTrigger>
									<SelectContent>
										{sectors.map((sector) => (
											<SelectItem key={sector.id} value={sector.id}>
												{sector.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-1">
								<Label>Do you own a company?</Label>
								<RadioGroup
									defaultValue="no"
									onValueChange={(e) => {
										setCompanyOwner(e);
									}}
									className="space-y-1"
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="yes" id="yes" />
										<Label htmlFor="yes">Yes, I own a company</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="no" id="no" />
										<Label htmlFor="no">No, I don't</Label>
									</div>
								</RadioGroup>
							</div>
							{companyOwner === "yes" && (
								<div className="space-y-1">
									<Label>What's your company's name?</Label>
									<Input
										type="text"
										required={companyOwner === "yes"}
										value={companyName}
										onChange={(e) => {
											setCompanyName(e.target.value);
										}}
									/>
								</div>
							)}
						</CardContent>
						<CardFooter>
							<Button variant="brand" className="w-full hover:opacity-80">
								Done
							</Button>
						</CardFooter>
					</form>
				</Card>
			</div>
		);
};

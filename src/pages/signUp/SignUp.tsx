import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password.length < 6) {
			toast({
				title: "Password must be at least 6 characters",
				variant: "alert",
			});
			return;
		}
	};
	return (
		<>
			<div className="h-screen flex">
				<div className="lg:flex-1 bg-brand-gradient flex items-center justify-center relative">
					<div className="absolute w-full h-full bg-zinc-100/40 dark:bg-zinc-800/40 backdrop-blur-sm" />
				</div>
				<div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto"
					>
						<legend className="self-start text-2xl font-semibold">
							Welcome!
						</legend>
						<div className="w-full">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="w-full">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="At least 6 characters"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<Button
							variant="brand"
							className="w-full bg-brand-gradient hover:opacity-80"
						>
							Create account
						</Button>
					</form>
					<Link to="/signin">
						<Button variant="link" className="w-full">
							Already have an account? Sign in
						</Button>
					</Link>
				</div>
			</div>
			<Toaster />
		</>
	);
};
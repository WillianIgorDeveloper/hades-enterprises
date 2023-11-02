import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { signIn } from "@/server/auth";

export const SignIn = () => {
	const navegate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [passwordType, setPasswordType] = useState<"password" | "text">("password");
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const { success } = await signIn(email, password);
		if (success) navegate("/app", { replace: true });
		setLoading(false);
	};
	const loginWithHades = async (hadesEmail: string, hadesPassword: string) => {
		setLoading(true);
		const { success } = await signIn(hadesEmail, hadesPassword);
		if (success) navegate("/app", { replace: true });
		setLoading(false);
	};
	return (
		<div className="h-screen flex">
			<div className="lg:flex-1 bg-brand-gradient flex items-center justify-center relative">
				<div className="absolute w-full h-full bg-zinc-100/40 dark:bg-zinc-800/40 backdrop-blur-sm" />
			</div>
			<div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative">
				{loading && (
					<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 z-20">
						<Loader2 size={48} className="animate-spin" />
					</div>
				)}
				<form
					onSubmit={handleSubmit}
					className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto"
				>
					<legend className="self-start text-2xl font-semibold">
						Hades Enterprises
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
						<div className="relative">
							<Input
								id="password"
								type={passwordType}
								placeholder="Enter your password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							{passwordType === "password" ? (
								<Eye
									className="absolute right-2 top-2 text-zinc-500 dark:text-zinc-400 cursor-pointer"
									onClick={() => setPasswordType("text")}
								/>
							) : (
								<EyeOff
									className="absolute right-2 top-2 text-zinc-500 dark:text-zinc-400 cursor-pointer"
									onClick={() => setPasswordType("password")}
								/>
							)}
						</div>
					</div>
					<Button
						variant="brand"
						className="w-full bg-brand-gradient hover:opacity-80"
					>
						Sign in
					</Button>
				</form>
				<Separator className="my-3 max-w-sm mx-auto" />
				<div className="w-full flex items-center justify-between p-3 bg-zinc-200 dark:bg-zinc-800 rounded my-3 max-w-sm mx-auto">
					<div className="flex gap-3 items-center">
						<img src="./icon.png" alt="Hades" className="w-10 h-10" />
						<div>
							<p className="font-semibold">Hades</p>
							<span className="text-sm">Enter without an account</span>
						</div>
					</div>
					<Button
						size="sm"
						onClick={() => {
							loginWithHades("hades@email.com", "hadespassword");
						}}
					>
						Login
					</Button>
				</div>
				<Link to="/signup">
					<Button variant="link" className="w-full">
						Don't have an account? Sign up
					</Button>
				</Link>
			</div>
		</div>
	);
};

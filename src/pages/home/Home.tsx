import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<header className="fixed w-full">
				<div className="container mx-auto p-3 flex items-center justify-between lg:p-5">
					<h1 className="text-xl font-bold">Hades Enterprises</h1>
					<ThemeToggle />
				</div>
			</header>
			<main>
				<section className="text-center p-5 h-screen flex flex-col items-center justify-center gap-3 container max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
					<img src="/icon.png" alt="Atlas" className="md:max-w-xs" />
					<div className="space-y-3 md:max-w-xs lg:max-w-md xl:max-w-lg">
						<h2 className="text-3xl p-1 font-black bg-brand-gradient text-transparent bg-clip-text lg:text-4xl xl:text-5xl">
							Manage your business operations and workflows
						</h2>
						<p className="px-3 md:p-0">
							Whether you need to track projects, collaborate with teams, or
							automate tasks, we have you covered.
						</p>
						<div className="space-x-3 pt-1">
							<Link to="/signin">
								<Button
									variant="brand"
									className="hover:scale-105 transition-transform duration-200 ease-in-out"
								>
									Get Started
								</Button>
							</Link>
							<Link to="/signup">
								<Button variant="outline" className="gap-2">
									Create Account <ChevronsRight />
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

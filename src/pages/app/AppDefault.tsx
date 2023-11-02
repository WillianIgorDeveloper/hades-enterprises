import { Container } from "@/components/Container";
import { useAppUser } from "./contexts/AppUserContext";

export const AppDefault = () => {
	const { user } = useAppUser();
	const greetings = new Date().getHours() < 12 ? "Good Morning" : "Good Afternoon";
	return (
		<Container className="p-3">
			<div>
				<h1 className="text-xl">
					{greetings} {user?.nickname}
				</h1>
			</div>
		</Container>
	);
};

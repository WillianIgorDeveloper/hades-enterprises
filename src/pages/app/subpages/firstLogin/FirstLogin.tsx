import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { useFirstLogin } from "./contexts/FirstLoginContext";

export const FirstLogin = () => {
	const { step } = useFirstLogin();
	return (
		<div className="fixed z-30 w-full h-full top-0 left-0 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
			{
				{
					1: <StepOne />,
					2: <StepTwo />,
				}[step]
			}
		</div>
	);
};

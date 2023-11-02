import { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type FirstLoginContextType = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	nickname: string;
	setNickname: React.Dispatch<React.SetStateAction<string>>;
	sector: string;
	setSector: React.Dispatch<React.SetStateAction<string>>;
	newSector: string;
	setNewSector: React.Dispatch<React.SetStateAction<string>>;
	saveProfile: () => void;
};

const FirstLoginContext = createContext({} as FirstLoginContextType);
export const FirstLoginProvider = ({ children }: { children: ReactNode }) => {
	const navegate = useNavigate();
	const [step, setStep] = useState(1);
	const [nickname, setNickname] = useState("");
	const [sector, setSector] = useState("");
	const [newSector, setNewSector] = useState("");

	const saveProfile = () => {
		console.log(nickname, sector, newSector);
		navegate("/app", { replace: true });
	};

	return (
		<FirstLoginContext.Provider
			value={{
				step,
				setStep,
				nickname,
				setNickname,
				sector,
				setSector,
				newSector,
				setNewSector,
				saveProfile,
			}}
		>
			{children}
		</FirstLoginContext.Provider>
	);
};

export const useFirstLogin = () => {
	return useContext(FirstLoginContext);
};

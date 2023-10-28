import { ReactNode, createContext, useEffect, useContext } from "react";

type ThemeContextType = {
	toggleTheme: (newTheme: "light" | "dark" | "system") => void;
};

const ThemeContext = createContext({} as ThemeContextType);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const checkTheme = () => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};
	const toggleTheme = (newTheme: "light" | "dark" | "system") => {
		if (newTheme === "light") localStorage.theme = "light";
		else if (newTheme === "dark") localStorage.theme = "dark";
		else localStorage.removeItem("theme");
		checkTheme();
	};
	useEffect(() => {
		checkTheme();
	}, []);
	return (
		<ThemeContext.Provider value={{ toggleTheme }}>{children}</ThemeContext.Provider>
	);
};
export const useTheme = () => {
	return useContext(ThemeContext);
};

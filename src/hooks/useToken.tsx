import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export const useToken = () => {
	const navegate = useNavigate();
	const getToken = () => {
		const token = localStorage.getItem("token");
		if (!token) {
			localStorage.removeItem("token");
			toast({ title: "Session expired, please log in again", variant: "alert" });
			navegate("/signin", { replace: true });
			return null;
		}
		return token;
	};
	return getToken;
};

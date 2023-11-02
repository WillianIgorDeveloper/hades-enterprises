import { toast } from "@/components/ui/use-toast";
export const errorHandler = (error: any) => {
	console.log(error);
	toast({ title: "Internal server error", variant: "destructive" });
	return { success: false, data: null };
};

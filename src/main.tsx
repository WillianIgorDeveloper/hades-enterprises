import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import { Home } from "@/pages/home/Home";
import { SignInMiddleware } from "@/pages/signIn/SignInMiddleware";
import { SignUp } from "@/pages/signUp/SignUp";
import { NotFound } from "@/pages/notFound/NotFound";
import { AppMiddleware } from "@/pages/app/AppMiddleware";
import { AppDefault } from "@/pages/app/AppDefault";
import { FirstLoginMiddleware } from "./pages/app/subpages/firstLogin/FirstLoginMiddleware";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="signin" element={<SignInMiddleware />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="app" element={<AppMiddleware />}>
						<Route index element={<AppDefault />} />
						<Route path="first-login" element={<FirstLoginMiddleware />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Toaster />
		</ThemeProvider>
	</React.StrictMode>
);

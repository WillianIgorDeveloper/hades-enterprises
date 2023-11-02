import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import { Home } from "@/pages/home/Home";
import { SignUp } from "@/pages/signUp/SignUp";
import { SignInMiddleware } from "@/pages/signIn/SignInMiddleware";
import { NotFound } from "@/pages/notFound/NotFound";
import { AppMiddleware } from "@/pages/app/AppMiddleware";
import { AppDefault } from "@/pages/app/AppDefault";
import { FirstLogin } from "@/pages/app/subpages/firstLogin/FirstLogin";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="signin" element={<SignInMiddleware />} />
					<Route path="app" element={<AppMiddleware />}>
						<Route index element={<AppDefault />} />
						<Route path="first-login" element={<FirstLogin />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Toaster />
		</ThemeProvider>
	</React.StrictMode>
);

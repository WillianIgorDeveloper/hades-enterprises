import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Home } from "@/pages/home/Home";
import { SignIn } from "@/pages/signIn/SignIn";
import { SignUp } from "@/pages/signUp/SignUp";
import { NotFound } from "@/pages/notFound/NotFound";
import { AppMiddleware } from "@/pages/app/AppMiddleware";
import { AppDefault } from "@/pages/app/AppDefault";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="app" element={<AppMiddleware />}>
						<Route index element={<AppDefault />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);

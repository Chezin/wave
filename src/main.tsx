import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import { Header } from "./components/Header/index";
import Footer from "./components/Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./services/providers/AuthProvider.tsx";
import Profile from "./pages/Profile.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import Admin from "./pages/Admin.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/me",
		element: (
			<ProtectedRoute>
				<Profile />
			</ProtectedRoute>
		),
	},
	{
		path: "/admin",
		element: <Admin />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<Header.Root />
			<div className="body bg-base-100">
				<RouterProvider router={router} />
			</div>
			<Footer />
		</AuthProvider>
	</React.StrictMode>
);

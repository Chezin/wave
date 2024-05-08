import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./components/AuthProvider.tsx";
import Profile from "./pages/Profile.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<Header />
			<div className="body bg-base-100">
				<RouterProvider router={router} />
			</div>
		</AuthProvider>
		<Footer />
	</React.StrictMode>
);

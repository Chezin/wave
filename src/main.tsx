import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Header />
		<div className="body bg-base-100">
			<RouterProvider router={router} />
		</div>
		<Footer />
	</React.StrictMode>
);

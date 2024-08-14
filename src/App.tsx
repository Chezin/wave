import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import useAuth from "./hooks/useAuth";
import Footer from "./components/Footer";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import LoginPage from "./pages/Login";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/login",
		element: <LoginPage />,
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
		path: "/settings",
		element: (
			<ProtectedRoute>
				<Settings />
			</ProtectedRoute>
		),
	},
	{
		path: "/admin",
		element: <Admin />,
	},
]);

const App = () => {
	useAuth();

	return (
		<>
			<Header.Root />
			<div className="body bg-base-100">
				<RouterProvider router={router} />
			</div>
			<Footer />
		</>
	);
};

export default App;

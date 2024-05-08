import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
	const user = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		console.log("User is: ", user);
		if (user === null) {
			navigate("/signin", { replace: true });
		}
	}, [navigate, user]);

	return children;
};

import { PropsWithChildren, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
	const user = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user === null) {
			navigate("/signin", { replace: true });
		}
	}, [navigate, user]);

	return children;
};

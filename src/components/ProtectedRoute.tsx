import { PropsWithChildren, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import useUserSlice from "../store";

export const ProtectedRoute = ({
	children,
}: PropsWithChildren<{ children: ReactNode }>) => {
	const { isAuthenticated, isLoading } = useUserSlice();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			navigate("/login", { replace: true });
		}
	}, [isAuthenticated, isLoading, navigate]);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<span className="loading loading-dots loading-lg"></span>
			</div>
		);
	}

	return isAuthenticated ? <>{children}</> : null;
};

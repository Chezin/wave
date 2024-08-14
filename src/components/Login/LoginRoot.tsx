import { ReactNode } from "react";

interface LoginRootProps {
	children: ReactNode;
	handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginRoot = ({ children, handleLogin }: LoginRootProps) => {
	return (
		<>
			<div className="center-container">
				<div className="text-primary font-bold text-5xl mb-6">
					Login
				</div>
				<form onSubmit={handleLogin} className="w-[35rem]">
					{children}
				</form>
			</div>
		</>
	);
};

export default LoginRoot;

import { ReactNode } from "react";

interface LoginRootProps {
	children: ReactNode;
	handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginRoot = ({ children, handleLogin }: LoginRootProps) => {
	return (
		<form onSubmit={handleLogin} className="w-[35rem]">
			{children}
		</form>
	);
};

export default LoginRoot;

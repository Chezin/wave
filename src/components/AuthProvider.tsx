import { createContext, PropsWithChildren, useContext, useState } from "react";

type User = {
	id: number;
};

type AuthProviderProps = PropsWithChildren & {
	isSignedIn?: boolean;
};

const AuthContext = createContext<User | null>(null);

const AuthProvider = ({ children, isSignedIn }: AuthProviderProps) => {
	const [user] = useState<User | null>(isSignedIn ? { id: 1 } : null);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error("useAuth must be used within an AuthProvider");
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };

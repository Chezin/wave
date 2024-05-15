/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import api from "../api/api";
import { User } from "../../types/types";

const PROFILE_URL = "http://localhost:3500/users/me";

type AuthContextParams = {
	user: User | null;
	setUser: (user: User | null) => void;
};

type AuthProviderProps = PropsWithChildren & {
	isSignedIn?: boolean;
};

const AuthContext = createContext<AuthContextParams | null>(null);
const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const loadUser = useCallback(async () => {
		try {
			const response = await api.get(PROFILE_URL, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			setUser(response.data);
		} catch (error) {
			//console.error(error);
		}
	}, []);
	useEffect(() => {
		loadUser();
	}, [loadUser]);
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error("useAuth must be used within an AuthProvider");
	return context;
};

export { useAuth, AuthProvider };
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import Cookies from "js-cookie";
import axios from "axios";

const PROFILE_URL = "http://localhost:3500/users/me";

type User = {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
};

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
		console.log(Cookies.get("access-token"), "- JWT");
		try {
			const response = await axios.get(PROFILE_URL, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + Cookies.get("access-token"),
				},
			});
			setUser(response.data);
		} catch (error) {
			console.log(error);
		}
	}, []);
	useEffect(() => {
		loadUser();
	}, [loadUser]);
	console.log("inside provider", user);
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

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };

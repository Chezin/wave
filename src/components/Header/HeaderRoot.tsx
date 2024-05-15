import { Header } from ".";
import { useAuth } from "../../services/providers/AuthProvider";

const HeaderRoot = () => {
	const { user } = useAuth();
	return user ? <Header.SignedIn /> : <Header.SignedOff />;
};

export default HeaderRoot;

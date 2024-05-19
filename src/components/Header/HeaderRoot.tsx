import { Header } from ".";
import useAuth  from "../../hooks/useAuth";

const HeaderRoot = () => {
	const { user } = useAuth();
	return user ? <Header.SignedIn /> : <Header.SignedOff />;
};

export default HeaderRoot;

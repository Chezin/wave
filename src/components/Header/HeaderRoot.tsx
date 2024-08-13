import { Header } from ".";
import useUserSlice from "../../store";

const HeaderRoot = () => {
	const user = useUserSlice();
	console.log("is authenticated?", user);
	return user.isAuthenticated ? <Header.SignedIn /> : <Header.SignedOff />;
};

export default HeaderRoot;

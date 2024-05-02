import { useAuth } from "../AuthProvider";
import SignedInHeader from "./SignedInHeader";
import SignedOutHeader from "./SignedOutHeader";

const Header = () => {
	const { user } = useAuth();

	return user ? <SignedInHeader /> : <SignedOutHeader />;
};

export default Header;

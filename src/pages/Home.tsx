import { useAuth } from "../components/AuthProvider";
import Hero from "../components/Hero";

const Home = () => {
	const { user } = useAuth();
	console.log(user);
	return (
		<div>
			<Hero></Hero>
		</div>
	);
};

export default Home;

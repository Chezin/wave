import { Link } from "react-router-dom";

const LoginNewAccount = () => {
	return (
		<div className="flex flex-col items-center mt-5 space-y-2">
			<p className="text-center">Don't have an account?</p>
			<div>
				<Link className="text-accent font-bold" to="/signup">
					Sign up here
				</Link>
			</div>
		</div>
	);
};

export default LoginNewAccount;

import { useState } from "react";
import { Login } from "../components/Login/index";
import useLoginHandler from "../hooks/useLoginHandler";

const LoginPage = () => {
	const [loginParams, setLoginParams] = useState({ email: "", password: "" });
	const { isLoading, error, handleLogin } = useLoginHandler(loginParams);

	return (
		<Login.Root handleLogin={handleLogin}>
			<Login.Fields
				loginParams={loginParams}
				setLoginParams={setLoginParams}
			/>
			{error ? <Login.ErrorTag statusCode={error?.status} /> : ""}
			<div className="flex justify-center mt-10">
				<Login.Button isLoading={isLoading} />
			</div>
			<Login.NewAccount />
		</Login.Root>
	);
};

export default LoginPage;

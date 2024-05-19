import { AxiosError, AxiosResponse } from "axios";
import { useReducer, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api/api";
import { Login } from "./index";

type LoginParams = {
	email: string;
	password: string;
};

type LoginAction = {
	type: "SET_EMAIL" | "SET_PASSWORD";
	payload: string;
};

const LOGIN_URL = "http://localhost:3500/auth/login";

const loginReducer = (state: LoginParams, action: LoginAction) => {
	switch (action.type) {
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_PASSWORD":
			return { ...state, password: action.payload };
		default:
			return state;
	}
};
const LoginAction = () => {
	const [loginState, setLoginState] = useReducer(loginReducer, {
		email: "",
		password: "",
	});
	const { setUser } = useAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<AxiosResponse>();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		const payload = {
			email: loginState.email,
			password: loginState.password,
		};

		try {
			setIsLoading(true);
			setError(undefined);
			const response = await api.post(LOGIN_URL, payload, {
				headers: { "Content-Type": "application/json" },
			});

			const { refreshToken, accessToken, foundUser } = response.data;
			Cookies.set("refresh-token", refreshToken);
			Cookies.set("access-token", accessToken);

			setUser(foundUser);
			navigate("/");
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				setIsLoading(false);
				setError(error.response);
			}
		}
	};

	return (
		<Login.Content
			handleSubmit={handleSubmit}
			loginState={loginState}
			setLoginState={setLoginState}
			error={error?.status}
			isLoading={isLoading}
		/>
	);
};

export default LoginAction;

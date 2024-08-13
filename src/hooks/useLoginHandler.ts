import { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api/api";
import useUserSlice from "../store";

const LOGIN_URL = "http://localhost:3500/auth/login";

type LoginParams = {
	email: string;
	password: string;
};

const setTokens = (refreshToken: string, accessToken: string) => {
	Cookies.set("refresh-token", refreshToken);
	Cookies.set("access-token", accessToken);
};

const useLoginHandler = (loginParams: LoginParams) => {
	const { login } = useUserSlice();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<AxiosResponse>();

	const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		const payload = {
			email: loginParams.email,
			password: loginParams.password,
		};

		try {
			setIsLoading(true);
			setError(undefined);
			const response = await api.post(LOGIN_URL, payload, {
				headers: { "Content-Type": "application/json" },
			});

			const { refreshToken, accessToken, foundUser } = response.data;
			setTokens(refreshToken, accessToken);
			login(foundUser);

			navigate("/");
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				setIsLoading(false);
				setError(error.response);
			}
		}
	};

	return { isLoading, error, handleLogin };
};

export default useLoginHandler;

import { AxiosError } from "axios";
import { useReducer, useState } from "react";
import Cookies from "js-cookie";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

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

const Login = () => {
	const initialState = { email: "", password: "" };
	const [loginState, setLoginState] = useReducer(loginReducer, initialState);
	const { setUser } = useAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		const payload = {
			email: loginState.email,
			password: loginState.password,
		};

		try {
			setIsLoading(true);
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
				console.log(error.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-[35rem]">
			<div className="mb-4">
				<label className="input input-bordered flex items-center gap-2">
					<input
						type="text"
						className="grow"
						placeholder="Email"
						value={loginState.email}
						onChange={(e) => {
							setLoginState({
								type: "SET_EMAIL",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			<div className="mb-4">
				<label className="input input-bordered flex items-center gap-2`">
					<input
						type="password"
						className="grow"
						placeholder="Password"
						value={loginState.password}
						onChange={(e) => {
							setLoginState({
								type: "SET_PASSWORD",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			<div className="flex justify-center mt-10">
				{isLoading ? (
					<button
						className="btn btn-ghost w-32"
						type="submit"
						disabled
					>
						Sending
					</button>
				) : (
					<button className="btn w-32" type="submit">
						Send
					</button>
				)}
			</div>
		</form>
	);
};

export default Login;

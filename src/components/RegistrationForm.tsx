import axios from "axios";
import { useState, useReducer } from "react";
import Cookie from "js-cookie";
import { PatternFormat } from "react-number-format";
import { useAuth } from "../services/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const REGISTER_URL = "http://localhost:3500/auth/register";

const EMAIL_REGEX = new RegExp(
	"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\\b"
);
const PASSWORD_REGEX = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");

type SignUpParams = {
	email: string;
	password: string;
	matchPassword: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
};

type SignUpAction = {
	type:
		| "SET_EMAIL"
		| "SET_PASSWORD"
		| "SET_MATCH_PASSWORD"
		| "SET_FIRST_NAME"
		| "SET_LAST_NAME"
		| "SET_PHONE_NUMBER";
	payload: string;
};

const initialState = {
	email: "",
	password: "",
	matchPassword: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
};

const signUpReducer = (state: SignUpParams, action: SignUpAction) => {
	switch (action.type) {
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_PASSWORD":
			return { ...state, password: action.payload };
		case "SET_MATCH_PASSWORD":
			return { ...state, matchPassword: action.payload };
		case "SET_FIRST_NAME":
			return { ...state, firstName: action.payload };
		case "SET_LAST_NAME":
			return { ...state, lastName: action.payload };
		case "SET_PHONE_NUMBER":
			return { ...state, phoneNumber: action.payload };
		default:
			return state;
	}
};

const RegistrationForm = () => {
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [passwordMatches, setPasswordMatches] = useState(true);
	const [signUpState, setSignUpState] = useReducer(
		signUpReducer,
		initialState
	);
	const { setUser } = useAuth();
	const navigate = useNavigate();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		setIsValidEmail(EMAIL_REGEX.test(signUpState.email));
		setPasswordMatches(signUpState.password == signUpState.matchPassword);
		setIsValidPassword(PASSWORD_REGEX.test(signUpState.password));
		if (
			EMAIL_REGEX.test(signUpState.email) &&
			signUpState.password == signUpState.matchPassword &&
			PASSWORD_REGEX.test(signUpState.password)
		) {
			const payload = {
				email: signUpState.email,
				firstName: signUpState.firstName,
				lastName: signUpState.lastName,
				phoneNumber: signUpState.phoneNumber,
				password: signUpState.password,
			};
			try {
				const registerResponse = await axios.post(
					REGISTER_URL,
					payload,
					{
						headers: { "Content-Type": "application/json" },
					}
				);
				const { refreshToken, accessToken, user } =
					registerResponse.data;

				Cookie.set("refresh-token", refreshToken);
				Cookie.set("access-token", accessToken);
				setUser(user);
				navigate("/");
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-[35rem]">
			<div className="mb-4">
				<span className="label-text">Email</span>
				{isValidEmail ? (
					""
				) : (
					<div className="badge badge-error gap-2">
						Invalid e-mail
					</div>
				)}
				<label
					className={`input ${
						isValidEmail ? "input-bordered" : "input-error"
					} flex items-center gap-2`}
				>
					<input
						type="text"
						className="grow"
						placeholder="Email"
						value={signUpState.email}
						onChange={(e) => {
							setSignUpState({
								type: "SET_EMAIL",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			<div className="mb-2">
				<span className="label-text">Name</span>
				<label className="input input-bordered flex items-center gap-2">
					<input
						type="text"
						placeholder="First name"
						className="grow"
						value={signUpState.firstName}
						onChange={(e) => {
							setSignUpState({
								type: "SET_FIRST_NAME",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			<div className="mb-4">
				<label className="input input-bordered flex items-center gap-2">
					<input
						type="text"
						placeholder="Last name"
						className="grow"
						value={signUpState.lastName}
						onChange={(e) => {
							setSignUpState({
								type: "SET_LAST_NAME",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			<div className="mb-4">
				<span className="label-text">Phone</span>
				<label className="input input-bordered flex items-center gap-2">
					<PatternFormat
						format="+55 (##) ##### ####"
						displayType="input"
						type="tel"
						className="grow"
						placeholder="Phone number"
						value={signUpState.phoneNumber}
						onChange={(e) => {
							setSignUpState({
								type: "SET_PHONE_NUMBER",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			{isValidPassword ? (
				""
			) : (
				<div className="badge badge-error h-fit">
					Password must have at least 8 characters, containing at
					least 1 lowercase character, 1 uppercase character and 1
					number
				</div>
			)}
			<div className="mb-2">
				<span className="label-text">Password</span>
				<label
					className={`input ${
						isValidPassword ? "input-bordered" : "input-error"
					} flex items-center gap-2`}
				>
					<input
						type="password"
						className="grow"
						placeholder="Must have at least 8 characters"
						value={signUpState.password}
						onChange={(e) => {
							setSignUpState({
								type: "SET_PASSWORD",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			{passwordMatches ? (
				""
			) : (
				<div className="badge badge-error h-fit">
					Passwords must match
				</div>
			)}
			<div className="mb-4">
				<label
					className={`input ${
						passwordMatches ? "input-bordered" : "input-error"
					} flex items-center gap-2`}
				>
					<input
						type="password"
						placeholder="Repeat Password"
						className="grow"
						value={signUpState.matchPassword}
						onChange={(e) => {
							setSignUpState({
								type: "SET_MATCH_PASSWORD",
								payload: e.target.value,
							});
						}}
					/>
				</label>
			</div>
			<div className="flex justify-center mt-10">
				<button className="btn w-32" type="submit">
					Send
				</button>
			</div>
		</form>
	);
};

export default RegistrationForm;

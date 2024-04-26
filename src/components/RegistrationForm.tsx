import { useState, useReducer } from "react";

const emailRegex = new RegExp(
	"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\\b"
);

const passwordRegex = new RegExp(
	"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"
);

type SignUpParams = {
	email: string;
	password: string;
	matchPassword: string;
};

type SignUpAction = {
	type: "SET_EMAIL" | "SET_PASSWORD" | "SET_MATCH_PASSWORD";
	payload: string;
};

const initialState = { email: "", password: "", matchPassword: "" };

const signUpReducer = (state: SignUpParams, action: SignUpAction) => {
	switch (action.type) {
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_PASSWORD":
			return { ...state, password: action.payload };
		case "SET_MATCH_PASSWORD":
			return { ...state, matchPassword: action.payload };
		default:
			return state;
	}
};

const RegistrationForm = () => {
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(false);
	const [passwordMatches, setPasswordMatches] = useState(false);

	const [signUpState, setSignUpState] = useReducer(
		signUpReducer,
		initialState
	);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		console.log(
			signUpState.email,
			signUpState.password,
			signUpState.matchPassword
		);
		setIsValidEmail(emailRegex.test(signUpState.email));
		setPasswordMatches(signUpState.password == signUpState.matchPassword);
		setIsValidPassword(passwordRegex.test(signUpState.password));
		if (
			emailRegex.test(signUpState.email) &&
			signUpState.password == signUpState.matchPassword &&
			passwordRegex.test(signUpState.password)
		) {
			console.log("ma oe");
		}
	};

	// const [errorMessage, setErrorMessage] = useState("");
	// const [success, setSuccess] = useState(false);

	// console.log(signUpState.email, emailRegex.test(signUpState.email));

	return (
		<form onSubmit={handleSubmit} className="max-w-[45rem]">
			{isValidEmail ? (
				""
			) : (
				<div className="badge badge-error gap-2">Invalid e-mail</div>
			)}
			<label className="input input-bordered flex items-center gap-2">
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

			{isValidPassword ? (
				""
			) : (
				<div className="badge badge-error h-fit">
					A senha deve ter mais de 8 caracteres, contendo pelo uma
					letra maiuscula, uma letra minuscula e um número.
				</div>
			)}
			<label className="input input-bordered flex items-center gap-2">
				<input
					type="password"
					className="grow"
					placeholder="Password"
					value={signUpState.password}
					onChange={(e) => {
						setSignUpState({
							type: "SET_PASSWORD",
							payload: e.target.value,
						});
					}}
				/>
			</label>

			{passwordMatches ? (
				""
			) : (
				<div className="badge badge-error h-fit">
					Verifique se as senhas são iguais
				</div>
			)}
			<label className="input input-bordered flex items-center gap-2">
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
			<div className="flex justify-center">
				<button className="btn" type="submit">
					Send
				</button>
			</div>
		</form>
	);
};

export default RegistrationForm;

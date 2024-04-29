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
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [passwordMatches, setPasswordMatches] = useState(true);

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

	return (
		<form onSubmit={handleSubmit} className="w-[35rem]">
			<div className="mb-4">
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
			{isValidPassword ? (
				""
			) : (
				<div className="badge badge-error h-fit">
					Password must have at least 8 characters, containing at
					least 1 lowercase character, 1 uppercase character and 1
					number
				</div>
			)}
			<div className="mb-4">
				<label
					className={`input ${
						isValidPassword ? "input-bordered" : "input-error"
					} flex items-center gap-2`}
				>
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

import { Login } from ".";

type LoginParams = {
	email: string;
	password: string;
};

type LoginAction = {
	type: "SET_EMAIL" | "SET_PASSWORD";
	payload: string;
};

interface LoginContentProps {
	loginState: LoginParams;
	setLoginState: React.Dispatch<LoginAction>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: number | undefined;
	isLoading: boolean;
}

const LoginContent = ({
	handleSubmit,
	loginState,
	setLoginState,
	error,
	isLoading,
}: LoginContentProps) => {
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
			{error ? <Login.ErrorTag statusCode={error} /> : ""}
			<div className="flex justify-center mt-10">
				<Login.Button isLoading={isLoading} />
			</div>
		</form>
	);
};

export default LoginContent;

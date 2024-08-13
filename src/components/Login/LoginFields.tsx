type LoginFieldsProps = {
	loginParams: {
		email: string;
		password: string;
	};
	setLoginParams: React.Dispatch<
		React.SetStateAction<{ email: string; password: string }>
	>;
};

const LoginFields = ({ loginParams, setLoginParams }: LoginFieldsProps) => {
	return (
		<>
			<div className="mb-4">
				Email
				<label className="input input-bordered flex items-center gap-2">
					<input
						type="text"
						className="grow"
						placeholder="Email"
						value={loginParams.email}
						onChange={(e) =>
							setLoginParams((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
					/>
				</label>
			</div>
			<div className="mb-4">
				Password
				<label className="input input-bordered flex items-center gap-2`">
					<input
						type="password"
						className="grow"
						placeholder="Password"
						value={loginParams.password}
						onChange={(e) =>
							setLoginParams((prev) => ({
								...prev,
								password: e.target.value,
							}))
						}
					/>
				</label>
			</div>
		</>
	);
};

export default LoginFields;

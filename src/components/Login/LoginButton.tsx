interface LoginButtonProps {
	isLoading: boolean;
}

const LoginButton = ({ isLoading }: LoginButtonProps) => {
	return isLoading ? (
		<button
			className="btn btn-ghost btn-secondary w-32"
			type="submit"
			disabled
		>
			Sending
			<span className="loading loading-spinner loading-xs"></span>
		</button>
	) : (
		<button className="btn w-32" type="submit">
			Send
		</button>
	);
};

export default LoginButton;

const SignedOutHeader = () => {
	return (
		<div className="navbar">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Wave</a>
			</div>
			<div className="flex-none">
				<a href="/login">
					<button className="btn">Login</button>
				</a>
			</div>
		</div>
	);
};

export default SignedOutHeader;

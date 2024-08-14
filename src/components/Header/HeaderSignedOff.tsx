const HeaderSignedOff = () => {
	return (
		<div className="navbar" data-testid="signed-off-header">
			<div className="flex-1">
				<a
					className="cursor-pointer text-xl font-extrabold ml-5"
					href="/"
				>
					Wave
				</a>
			</div>
			<div className="flex-none">
				<a href="/login">
					<button className="btn">Login</button>
				</a>
			</div>
		</div>
	);
};

export default HeaderSignedOff;

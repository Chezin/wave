const HeaderSignedOff = () => {
	return (
		<div className="navbar" data-testid="signed-off-header">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl" href="/">
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

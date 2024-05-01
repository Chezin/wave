import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-60 text-primary">
			<h1 className="font-extrabold text-9xl">SHIT!</h1>
			<h2 className="font-bold text-2xl mb-4">404 - PAGE NOT FOUND</h2>
			<p className="mt-6 text-primary">
				The page you are looking for might have been removed or had its
				name changed.
			</p>
			<button className="btn btn-secondary mt-2">
				<Link to="/">GO TO HOMEPAGE</Link>
			</button>
		</div>
	);
};

export default NotFound;

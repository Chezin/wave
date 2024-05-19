import ErrorIcon from "../ui/ErrorIcon";

interface LoginErrorTagProps {
	statusCode: number;
}

const ForbiddenErrorTag = () => {
	return (
		<div role="alert" className="alert alert-error mt-4">
			<ErrorIcon />
			<span>Invalid username or password</span>
		</div>
	);
};

const LoginErrorTag = ({ statusCode }: LoginErrorTagProps) => {
	if (statusCode === 401) {
		return <ForbiddenErrorTag />;
	} else {
		return <></>;
	}
};

export default LoginErrorTag;

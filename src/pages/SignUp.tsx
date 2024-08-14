import RegistrationForm from "../components/RegistrationForm";

const SignUp = () => {
	return (
		<div className="center-container">
			<div className="text-primary font-bold text-3xl">Welcome!</div>
			<div className="text-primary text-xl mb-6">
				But first we'll need some information
			</div>
			<RegistrationForm></RegistrationForm>
		</div>
	);
};

export default SignUp;

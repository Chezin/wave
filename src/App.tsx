import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";

function App() {
	return (
		<>
			<Header></Header>
			<div className="body">
				<RegistrationForm></RegistrationForm>
			</div>
		</>
	);
}

export default App;

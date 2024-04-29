import Footer from "./components/Footer";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";

function App() {
	return (
		<>
			<Header></Header>
			<div className="body">
				<RegistrationForm></RegistrationForm>
			</div>
			<Footer></Footer>
		</>
	);
}

export default App;

import logo from "./logo.svg";
import "./App.css";
// import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
//import Greeting from "./components/pure/Greeting";
// import GreetingF from "./components/pure/GreetingF";
// import TaskListComponent from "./components/container/TaskListComponent";
// import ContactContainerComponent from "./components/container/ContactContainerComponent";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <GreetingF /> */}
				{/* <TaskListComponent /> */}
				{/* <ContactContainerComponent /> */}
				{/* <Ejemplo1 /> */}
				<Ejemplo2 />
			</header>
		</div>
	);
}

export default App;

import "./App.css";
// import Ejemplo1 from "./hooks/Ejemplo1";
// import Ejemplo2 from "./hooks/Ejemplo2";
// import Ejemplo4 from "./hooks/Ejemplo4";
// import GreetingStyled from "./components/pure/GreetingStyled";
//import Greeting from "./components/pure/Greeting";
// import GreetingF from "./components/pure/GreetingF";
// import ContactContainerComponent from "./components/container/ContactContainerComponent";
//import Father from "./components/container/Father";
import TaskListComponent from "./components/container/TaskListComponent";

function App() {
	return (
		<div className="App">
			{/* <GreetingF /> */}
			{/* <ContactContainerComponent /> */}
			{/* <Ejemplo1 /> */}
			{/* <Ejemplo2 /> */}
			{/* Todo lo que hay aqui, es tratado como un props.children */}
			{/* <Ejemplo4 nombre="David">
					<h3>Contenido del props.children</h3>
				</Ejemplo4> */}
			{/* <GreetingStyled name="David" /> */}
			<TaskListComponent />
		</div>
	);
}

export default App;

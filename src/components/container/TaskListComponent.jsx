import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";

const TaskListComponent = () => {
	const defaultTask = new Task(
		"Example",
		"Default description",
		true,
		LEVELS.NORMAL
	);

	// const changeState = (id) => {
	// 	console.log("TODO: Cambiar estado de una tarea");
	// };

	return (
		<div>
			<div>Your Tasks:</div>
			{/*TODOS: Acplicar un For/Map para rendrizar una lista */}
			<TaskComponent task={defaultTask}></TaskComponent>
		</div>
	);
};

export default TaskListComponent;

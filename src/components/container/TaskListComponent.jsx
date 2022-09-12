import React, { useState, useEffect } from "react";
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
	const [tasks, setTasks] = useState([defaultTask]);

	useEffect(() => {
		console.log("Task state has been modified");

		return () => {
			console.log("TaskList component is going to unmount");
		};
	}, [tasks]);

	const changeCompleted = (id) => {
		console.log("TODO: Cambiar estado de una tarea");
	};

	return (
		<div>
			<div>Your Tasks:</div>
			{/*TODOS: Acplicar un For/Map para rendrizar una lista */}
			<TaskComponent task={defaultTask}></TaskComponent>
		</div>
	);
};

export default TaskListComponent;

import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/TaskForm";
import TaskComponent from "../pure/TaskComponent";
import "../../styles/task.css";

const TaskListComponent = () => {
	const defaultTask1 = new Task(
		"Example1",
		"Description1",
		true,
		LEVELS.NORMAL
	);

	const defaultTask2 = new Task(
		"Example2",
		"Description2",
		false,
		LEVELS.URGENT
	);

	const defaultTask3 = new Task(
		"Example3",
		"Description3",
		false,
		LEVELS.BLOCKING
	);

	//Estado del componente
	const [tasks, setTasks] = useState([
		defaultTask1,
		defaultTask2,
		defaultTask3,
	]);
	const [loading, setLoading] = useState(true);

	//Control del ciclo del vida del componente
	useEffect(() => {
		console.log("Task state has been modified");
		setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			console.log("TaskList component is going to unmount");
		};
	}, [tasks]);

	// const changeCompleted = (id) => {
	// 	console.log("TODO: Cambiar estado de una tarea");
	// };

	function completeTask(task) {
		console.log("Complete this Task:", task);
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks[index].completed = !tempTasks[index].completed;

		//We update the state of the component with the new list of tasks and it will update the iteration of the tasks in order to show the task updated
		setTasks(tempTasks);
	}

	function deleteTask(task) {
		console.log("Complete this Task:", task);
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks.splice(index, 1);
		setTasks(tempTasks);
	}

	function addTask(task) {
		console.log("Complete this Task:", task);

		const tempTasks = [...tasks];
		tempTasks.push(task);
		setTasks(tempTasks);
	}

	const Table = () => {
		return (
			<table>
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Priority</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task, index) => {
						return (
							<TaskComponent
								key={index}
								task={task}
								complete={completeTask}
								remove={deleteTask}
							/>
						);
					})}
				</tbody>
			</table>
		);
	};

	let taskTable;

	if (tasks.length > 0) {
		taskTable = <Table></Table>;
	} else {
		taskTable = (
			<div>
				<h3>There are no tasks to show</h3>
				<h4>Please create a task</h4>
			</div>
		);
	}

	const loadingStyle = {
		color: "grey",
		fontSize: "30px",
		fontWeight: "bold",
	};

	return (
		<div>
			<div className="col-12">
				<div>
					<div class="card">
						<div class="card-header p-3">
							<h5 class="card-title">Your Tasks:</h5>
						</div>
						<div
							className="card-body"
							style={{ position: "relative", height: "400px" }}
						>
							{loading ? (
								<p style={loadingStyle}>Loading tasks...</p>
							) : (
								taskTable
							)}
						</div>
					</div>
				</div>
			</div>
			<TaskForm add={addTask} length={tasks.length} />
		</div>
	);
};

export default TaskListComponent;

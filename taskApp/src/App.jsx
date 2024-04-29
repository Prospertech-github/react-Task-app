import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Button from './components/Button/Button';
import TaskContainer from './components/TaskContainer';
import Form from './components/Form/Form';

function App() {
	const [tasks, setTasks] = useState([]);
	const [viewForm, setViewForm] = useState(false);

	function handleSaveTask(task) {
		const id = uuid();
    const newTask = { id, ...task };
    
		setTasks([...tasks, newTask]);
	}

	function handleFormRender() {
		setViewForm(!viewForm);
  }
  
  function handleTaskDelete(id) {
    setTasks(tasks.filter((task) => {task.id !== id})
	);
  }

	return (
		<div className="app">
			<h2> Our To-Do App</h2>

			{tasks.length > 0 ? (
				<TaskContainer allTasks={tasks} deleteTask={handleTaskDelete}/>
			) : (
				<h2> PLEASE ADD NEW TASK </h2>
			)}

			<Button renderForm={handleFormRender} formState={viewForm} />

			{viewForm && <Form saveTask={handleSaveTask} />}
		</div>
	);
}

export default App;

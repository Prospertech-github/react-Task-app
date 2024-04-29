import React from 'react'
import { MdDelete } from 'react-icons/md';
import './Task.css'

function Task({task, deleteTask}) {
  return (
		<div className="task">
      <div className="taskinfo">
        
        <h3> {task.taskName}</h3>
        <p> {task.taskDetails} </p>
			</div>

			<MdDelete className='icon' onClick={()=>deleteTask(task.id)}/>
		</div>
  );
}

export default Task
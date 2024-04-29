import React from 'react'
import Task from './Tasks/Task';

function TaskContainer({allTasks, deleteTask}) {
  return (
		<div
			className="taskContainer"
			style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}
    >
      {
        allTasks.map((task, index) => {
          return <Task key={'TSK' + index} task={task} deleteTask={deleteTask}/>
        })
      }
		</div>
  );
}

export default TaskContainer




{/* {tasks.map((task, index) => {
  return (
    <Task
      key={'TSK' + index}
      task={task}
      deleteTask={deleteTask}
    />
  );
})} */}
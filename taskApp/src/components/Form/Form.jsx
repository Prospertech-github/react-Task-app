import React, { useState } from 'react'
import './Form.css'

function Form({saveTask}) {

  const [taskName, setTaskName] = useState('')
  const [taskDetails, setTaskDetails] = useState('')

  function submitHandler(e) {
    e.preventDefault()

    if (!taskName || !taskDetails) {
      alert('Please Complete the form')
    } else {
      saveTask({taskName, taskDetails})
    }

    setTaskName('')
    setTaskDetails('')
  }

  return (
		<form className="form" onSubmit={submitHandler}>
			<div className="form-controls">
				<label htmlFor="taskName"> Task Name: </label>
				<input
					type="text"
					name="taskName"
					id="taskName"
					value={taskName}
					onChange={e => setTaskName(e.target.value)}
				/>
			</div>

			<div className="form-controls">
				<label htmlFor="taskDetails"> Task Details: </label>
				<input
					type="text"
					name="taskDetails"
					id="taskDetails"
					value={taskDetails}
					onChange={e => setTaskDetails(e.target.value)}
				/>
			</div>

			<input type="submit" value="Save Task" className="btn" />
		</form>
  );
}

export default Form
import React, { useState } from "react";

const InputComponent = ({ todoList, setTodoList }) => {
	const [todo, setTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// add todos to Todo List with serial number
		setTodoList([...todoList, `${todoList.length + 1}. ${todo}`]);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className='btn'>ADD</button>
		</form>
	);
};

export default InputComponent;

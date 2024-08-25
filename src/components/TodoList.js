import React from "react";

const TodoList = ({ todoList }) => {
	return (
		<div className='list-container'>
			<h4>TODO LIST</h4>
			{todoList.length ? (
				<ul className='list'>
					{todoList.map((todo) => {
						return <li key={todo}>{todo}</li>;
					})}
				</ul>
			) : (
				""
			)}
		</div>
	);
};

export default TodoList;

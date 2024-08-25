import React, { useState } from "react";

import InputComponent from "./components/InputComponent.js";
import TodoList from "./components/TodoList.js";
import ViewList from "./components/ViewList.js";

import "./App.css";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [viewList, setViewList] = useState([]);

	const sortViewList = () => {
		let start = 0;

		let list = [];

		for (let end = todoList.length - 1; end >= start; end--) {
			if (start !== end) {
				list.push(todoList[end]);
				list.push(todoList[start]);
				start++;
			} else {
				list.push(todoList[start]);
			}
		}

		setViewList(list);
	};

	return (
		<>
			<InputComponent todoList={todoList} setTodoList={setTodoList} />
			<div className='flex-wrapper'>
				<TodoList todoList={todoList} />
				<button className='btn center' onClick={sortViewList}>
					Move
				</button>
				<ViewList viewList={viewList} />
			</div>
		</>
	);
}

export default App;

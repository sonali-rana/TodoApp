import React from "react";

const ViewList = ({ viewList, setViewList }) => {
	return (
		<div className='list-container'>
			<h4>VIEW LIST</h4>
			{viewList?.length ? (
				<ul className='list'>
					{viewList.map((todo) => {
						return <li key={todo}>{todo}</li>;
					})}
				</ul>
			) : (
				""
			)}
		</div>
	);
};

export default ViewList;

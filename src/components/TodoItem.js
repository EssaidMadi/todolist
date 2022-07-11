import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteTodo, toggleComplete } from '../store/todoSlice';


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const completClick = () => {
		dispatch(toggleComplete({id: id, completed:!completed}));
	}

	const deleteClick = () =>{
		dispatch(deleteTodo({id: id}))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={completClick}></input>
					{title}
				</span>
				<button onClick={deleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;

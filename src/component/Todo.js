import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, editTodo, deleteTodo}) => {
    return (
        <div className={`Todo ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' :
                ''
            }`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare}
                                 onClick={() => editTodo(task.id)}
                />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    );
};

export default Todo;
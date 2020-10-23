import React from 'react'
import './Todo.css'

const Todos = [
    'this one',
    'this two',
    'this three',
    'this four',
    'this five',
    'this six',
    'this seven'
]

const TodoList = props => {
    return (
        <div>
            {Todos.map(todo => (<li className="list">{todo}</li>))}
        </div>
    )
}

export default TodoList

import React, {useState} from 'react'
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';
// uuid(); // to initialize it

const TodoWrapper = () => {
    const [todos, setTodos]=useState([])


    const addTodo= (todo) =>{
        setTodos([
            ...todos, 
            {
                id: uuid(),
                task: todo,
                completed: false,
                isEditing: false
            }
        ])
        console.log(todos);
    }


    const toggleComplete=(id)=>{
        setTodos(todos.map(todo=> todo.id === id 
            ? {
                ...todo,
                completed: !todo.completed}
            : todo
        ))
    }

    const deleteTodo= (id)=>{
        // filtering each todo that ins't equal to the  id
        // so basically if the todo.id is not equal to the id we pass in then we want to return that value
        // essentially we're just removing the to do with the id equal to the id we passed in 
        setTodos(todos.filter(todo => todo.id !==id))
    }


    const editTodo=(id)=>{
        setTodos(todos.map(todo=> todo.id === id 
            ? {
                ...todo,
                isEditing: !todo.isEditing
            }
            : todo
        ))
    }


    const editTask= (task, id) =>{
        setTodos(todos.map(todo => todo.id === id
                ? {
                    ...todo,
                    task,
                    isEditing: !todo.isEditing
                }
                : todo  
            ))
    }


    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />

            {todos.map(todo => (
                    todo.isEditing ? (
                        // don't forget to add the key here cause its child should have a unique id also after is edited as well
                        <EditTodoForm key={todo.id} task={todo} editTodo={editTask}/>
                    ) : (
                        <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                    
                ))
            }

            <Todo />
        </div>
    )
}

export default TodoWrapper;
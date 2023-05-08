import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(value);
        // we need to pass this value to the Todo state.
        // we can't keep the state in here cause the other components will access the state as well 
        //So In order to do that we have to create the state inside the the parent component which is the TodoWrapper.js
        // console.log(value);

        //clear the form 
        setValue('')
    }


    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='What is the task today?' onChange={(e)=> setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default TodoForm;
import {useState} from "react";
import {v4 as uuid} from "uuid";



function TodoForm() {
    const[todo, setTodo] = useState ({
        id : "",
        task : "",
        completed : false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    return(
        <form>
            <input 
                name = "task"
                type = "text"
                value = {todo.task}
                onChange = {handleTaskInputChange}
            />

            <button type ="submit">Submit</button>
        </form>
    );
}


export default TodoForm;
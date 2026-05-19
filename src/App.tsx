import { useState } from 'react'
import './App.css'
import Task from "./components/Task.tsx";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    const deleteTask = (index: number) => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

    const updateTask = (index: number, value: string) => {
        const tasksCopy = [...tasks];
        tasksCopy[index] = value;
        setTasks(tasksCopy);
    }

    const addTask = () => {
        setTasks([...tasks, 'New task']);
    }

    return (
        <div className={'field'}>
            <button onClick={addTask} className={'btn new'}>Add Task</button>
            {tasks.map((task, index) => <Task
                edit={updateTask}
                remove={deleteTask}
                position={index}
                key={index}
            >{task}</Task>)}
        </div>
    )
}

export default App

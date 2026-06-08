import {useState, useCallback, useRef} from 'react'
import './App.css'
import Task from "./components/Task.tsx";

interface TaskType {
    id: number;
    text: string;
}

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const nextId = useRef(1);

    console.log(`App rendered`);

    const deleteTask = useCallback((id: number) => {
        setTasks(prevState => prevState.filter((task) => task.id !== id))
    }, [])

    const updateTask = useCallback((id: number, text: string) => {
        setTasks(prevState => prevState.map(task => task.id === id ? {...task, text} : task));
    }, [])

    const addTask = () => {
        setTasks(prevState => [...prevState, {id: nextId.current++, text: 'New task'}]);
    }

    return (
        <div className={'field'}>
            <button onClick={addTask} className={'btn new'}>Add Task</button>
            {tasks.map((task) => <Task
                edit={updateTask}
                remove={deleteTask}
                id={task.id}
                key={task.id}
            >{task.text}</Task>)}
        </div>
    )
}

export default App

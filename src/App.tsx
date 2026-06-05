import {useState, useCallback} from 'react'
import './App.css'
import Task from "./components/Task.tsx";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    console.log(`App rendered`);

    const deleteTask = useCallback((index: number) => setTasks(prevState => prevState.filter((_, i) => i !== index)), [])

    const updateTask = useCallback((index: number, value: string) => {
        setTasks(prevState => {
            const tasksCopy = [...prevState];
            tasksCopy[index] = value;
            return tasksCopy;
        });
    }, [])

    const addTask = () => {
        setTasks(prevState => [...prevState, 'New task']);
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

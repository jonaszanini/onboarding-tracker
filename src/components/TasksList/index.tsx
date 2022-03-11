import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface data {
    id: number;
}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export function TasksList({ id }: data) {
    const [tasks, setTasks] = useState<Todo[]>([])
    const [currentUserTasks, setCurrentUserTasks] = useState<Todo[]>([])
    const [filteredTasks, setFilteredTasks] = useState<Todo[]>([])
    const [taskSearchParam, setTaskSearchParam] = useState('')

    const handleCheckBoxStatus = (id: string) => {
        const temporaryTasks = [...tasks];

        const todoToChange = tasks.filter(todo => todo.id.toString() === id)
        todoToChange[0].completed = !todoToChange[0].completed;

        const index = tasks.findIndex(todo => todo.id === todoToChange[0].id);
        temporaryTasks[index] = todoToChange[0];

        setTasks(temporaryTasks);
    }

    useEffect(() => {
        api.get('/todos')
            .then(response => setTasks(response.data))
    }, [])

    useEffect(() => {
        const userTasks = tasks.filter(task => task.userId === id)
        setCurrentUserTasks(userTasks)
        setFilteredTasks(userTasks)
    }, [tasks, id])

    useEffect(() => {
        const filteredTasks = currentUserTasks.filter(task => task.title.includes(taskSearchParam))
        setFilteredTasks(filteredTasks);
    }, [taskSearchParam])

    return (
        <>
            <h2>Tasks List</h2>
            <label>Search task: </label><input value={taskSearchParam} onChange={e => setTaskSearchParam(e.target.value)} type='text'></input>

            {filteredTasks.map(task => {
                return (
                    <div key={task.id}>
                        <input
                            type="checkbox"
                            id={task.id.toString()}
                            value={task.id}
                            onChange={() => handleCheckBoxStatus(task.id.toString())}
                            defaultChecked={task.completed} />
                        <span>{task.title}</span>
                    </div>
                )
            })}
        </>
    )
}
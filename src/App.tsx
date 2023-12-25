import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./components/ToDoList";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'completed' | 'active'

//CRUD C-(R)-U-(D)
function App() {
    console.log(v1())
    const [filterValue, setFilter] = useState<FilterValueType>('all')
    const todoListTitle = "What to learn"
    let [tasks, setTasks] = useState<TaskType []>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
    ])

    const addTask = (title: string) => {
        // const newTask: TaskType ={
        //     id: v1(),
        //     title: title,
        //     //title,
        //     isDone: false
        // }
        // const nextState: Array<TaskType> = [newTask,...tasks]
        // setTasks(nextState)

        setTasks([{id: v1(), title, isDone: false}, ...tasks])
    }
    const removeTask = (taskid: string) => {
        setTasks(tasks.filter(t => t.id !== taskid));
    }
    const changeTaskStatus = (taskId: string, newIsDoneValue: boolean) => {
        const nextState: TaskType [] = tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} :t)
        setTasks(nextState)
    }

    const changeTodoListFilter = (filterValue: FilterValueType) => {
        setFilter(filterValue)
    }

    const getFiltredTasks = (tasks: Array<TaskType>, filter: FilterValueType): Array<TaskType> => {
        return filter === 'active'
            ? tasks.filter(t => t.isDone === false)
            : filter === 'completed'
                ? tasks.filter(t => t.isDone === true)
                : tasks
    }
    // const filtredTasks = getFiltredTasks(tasks, filter)


    return (
        <div className="App">
            <ToDoList
                title={todoListTitle}
                tasks={getFiltredTasks(tasks, filterValue)}
                addTask={addTask}
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}
                changeTaskStatus={changeTaskStatus}
                filterValue={filterValue}/>



        </div>
    );
}

export default App;

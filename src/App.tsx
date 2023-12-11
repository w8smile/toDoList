import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./components/ToDoList";

export type FilterValueType = 'all' | 'completed' | 'active'

function App() {
    const [filterValue, setFilter] = useState<FilterValueType>('all')
    const todoListTitle = "What to learn"
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'ПППП', isDone: false},
    ])
    const removeTask = (taskid: number) => {
        setTasks(tasks.filter(t => t.id !== taskid));
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
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}/>


        </div>
    );
}

export default App;

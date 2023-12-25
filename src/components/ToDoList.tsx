import Button from "./Button";
import {FilterValueType} from "../App";
import {useState, KeyboardEvent} from "react";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
    filterValue: FilterValueType
    changeTaskStatus: (taskId: string, newIsDoneValue: boolean)=> void
    removeTask: (taskid: string) => void
    addTask: (title: string) => void
    changeTodoListFilter: (filterValue: FilterValueType) => void
}

export function ToDoList({
                             title,
                             tasks,
                             addTask,
                             filterValue,
                             removeTask,
                             changeTodoListFilter,
                             changeTaskStatus,
                         }: ToDoListPropsType) {
    const [taskTitle, setTaskTitle] = useState("")
    const [inputError, setInputError] = useState(false)

    const listItems: Array<JSX.Element> = tasks.map((task: TaskType) => {
        return (
            <li key={task.id} className={task.isDone ? 'task-done' : 'task'} >
                <input type="checkbox"
                       checked={task.isDone}
                       onChange={(e)=>changeTaskStatus(task.id, e.currentTarget.checked )}/>
                <span>{task.title}</span>
                <Button title='X' onClickHandler={() => removeTask(task.id)}/>
            </li>
        )
    })

    const taskList: JSX.Element = tasks.length !== 0
        ? <ul>{listItems}</ul>
        : <span>Task list is empty</span>

    // const onChangeSetTaskTitle =

    // const addTaskOnClickHandler = () => {
    //     const trimmedTaskTitle = taskTitle.trim()
    //     if(trimmedTaskTitle) {
    //         addTask(taskTitle)
    //     }else{
    //         alert('У тебя одни пробелы')
    //     }
    // }
    const addTaskHandler = () => {
        const trimmedTaskTitle = taskTitle.trim()
        if(trimmedTaskTitle) {
            addTask(taskTitle)
        }else{
            setInputError(true)
        }
        setTaskTitle('')
    }

    const addTaskKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>)=>
    {if(e.key=== "Enter"&& taskTitle){
        addTaskHandler()
    }}




    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       onChange={(e) => {
                           setTaskTitle(e.currentTarget.value)
                           inputError && setInputError(false)
                       }}
                       onKeyDown={addTaskKeyDownHandler}
                       className={inputError ? 'input-error' : ''}
                    />
                <Button title="+" onClickHandler={addTaskHandler} isDisabled={!taskTitle}/>
                {inputError && <div style={{color:'red'}}>ERROR: Title is requeded!</div>}
            </div>
            {taskList}
            <div>
                <Button
                    classes={filterValue ==='all' ? 'btn-active' : ''}
                    title="All" onClickHandler={() => changeTodoListFilter("all")}/>
                <Button
                    classes={filterValue ==='active' ? 'btn-active' : ''}
                    title="Active" onClickHandler={() => changeTodoListFilter("active")}/>
                <Button
                    classes={filterValue ==='completed' ? 'btn-active' : ''}
                    title="Completed" onClickHandler={() => changeTodoListFilter("completed")}/>
            </div>
        </div>
    )

}

export default ToDoList;
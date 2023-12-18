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

    removeTask: (taskid: string) => void
    addTask: (title: string) => void
    changeTodoListFilter: (filterValue: FilterValueType) => void
}

export function ToDoList({
                             title,
                             tasks,
                             addTask,
                             removeTask,
                             changeTodoListFilter
                         }: ToDoListPropsType) {
    const [taskTitle, setTaskTitle] = useState("")

    const listItems: Array<JSX.Element> = tasks.map((task: TaskType) => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone}/>
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
            alert('У тебя одни пробелы)))')
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
                       }}
                       onKeyDown={addTaskKeyDownHandler}

                    />
                <Button title="+" onClickHandler={addTaskHandler} isDisabled={!taskTitle}/>
            </div>
            {taskList}
            <div>
                <Button title="All" onClickHandler={() => changeTodoListFilter("all")}/>
                <Button title="Active" onClickHandler={() => changeTodoListFilter("active")}/>
                <Button title="Completed" onClickHandler={() => changeTodoListFilter("completed")}/>

            </div>
        </div>
    )

}

export default ToDoList;
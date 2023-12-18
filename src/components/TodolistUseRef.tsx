import React, {useRef} from 'react';
import Button from "./Button";
import {FilterValueType} from "../App";

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
                             removeTask,
                             addTask,
                             changeTodoListFilter
                         }: ToDoListPropsType) {
    const taskTitleInput = useRef<HTMLInputElement>(null)
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

    const addTaskHandler = () => {
        if (taskTitleInput.current) {
            const newTaskTitle = taskTitleInput.current.value
            addTask(newTaskTitle)
            taskTitleInput.current.value = ""
        }
    }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input ref={taskTitleInput}/>
                <Button title="+" onClickHandler={addTaskHandler}/>
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
import React from 'react';
import Button from "./Button";
import {FilterValueType} from "../App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskid: number)=> void
    changeTodoListFilter: (filterValue: FilterValueType) => void
}
export function ToDoList({title, tasks, removeTask, changeTodoListFilter}: ToDoListPropsType) {
    const listItems: Array<JSX.Element> = tasks.map((task: TaskType)=>{
        return (
            <li>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button title='X' onClickHandler={()=> removeTask(task.id)}/>
            </li>
        )
    } )

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title="+" onClickHandler={()=>{}}/>
            </div>
            <ul>
                {listItems}

            </ul>
            <div>
                <Button title="All" onClickHandler={()=>changeTodoListFilter("all")}/>
                <Button title="Active" onClickHandler={()=>changeTodoListFilter("active")}/>
                <Button title="Completed" onClickHandler={()=>changeTodoListFilter("completed")}/>

            </div>
        </div>
    )

}

export default ToDoList;
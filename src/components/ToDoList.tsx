import React from 'react';
import Button from "./Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
const ToDoList = (props: ToDoListPropsType) => {
    const title=props.title
    const tasks=props.tasks

    const listItems: Array<JSX.Element> = []

      for (let i = 0; i <tasks.length; i++) {
        const listItem: JSX.Element = <li>
            <input type="checkbox" checked={tasks[i].isDone}/>
            <span>{tasks[i].title}</span>
        </li>
          listItems.push(listItem)
     }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title="+"/>
            </div>
            <ul>
                {listItems}

            </ul>
            <div>
                <Button title="All"/>
                <Button title="Active"/>
                <Button title="Completed"/>

            </div>
        </div>
    )

}

export default ToDoList;
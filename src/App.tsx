import React from 'react';
import './App.css';
import ToDoList, {TaskType} from "./components/ToDoList";

function App() {

    const todoListTitle_1 = "What to learn"
    const tasks_1 = [
        {id: 1, title: "HTML" , isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
        {id: 4, title: "React", isDone: true},
    ]

    const tasks_2 = [
        {id: 5, title: "MEAT", isDone: true},
        {id: 6, title: "EGG", isDone: true},
        {id: 7, title: "WATER", isDone: true},
    ]
    return (
        <div className="App">
           <ToDoList title="What to learn?" tasks={tasks_1}/>
           <ToDoList title="What to buy" tasks={tasks_2}/>
        </div>
    );
}

export default App;

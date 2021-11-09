import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {Tasks} from "./components/Tasks/Tasks";


export type StateType = {
    title: string,
    id: string,
    tag: string
}


export const App = () => {

    const [tasks, setTasks] = useState<StateType[]>
    (
        [
            {title: 'magazin', id: v1(), tag: '#all'},
            {title: 'learn English', id: v1(), tag: '#all'}
        ]
    )
    const handleAddTask = (title: string) => {
        setTasks([{title, id: v1(), tag: '#all'}, ...tasks])
    }
    return <div className={`container`}>
        <AddItemForm onSetAddTask={handleAddTask}/>
        <Tasks state={tasks}/>
    </div>
}


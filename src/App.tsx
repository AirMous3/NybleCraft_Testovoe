import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {Tasks} from "./components/Tasks/Tasks";
import {Tags} from "./components/HashTags/Tags";


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
    const [tags, setTags] = useState<string[]>([])

    const handleAddTask = (title: string) => {
        setTasks([{title, id: v1(), tag: '#all'}, ...tasks])
    }
    const handleDeleteTask = (taskId: string) => {
        setTasks(tasks.filter(i => i.id !== taskId))
    }
    const handleChangeTaskTitle = (taskId: string, title: string) => {
        setTasks(tasks.map((i) => i.id === taskId ? {...i, title} : i))
    }
    const handleAddTag = (tag: string[]) => {
        setTags([...tags, ...tag])
    }
    const handleAddTagTask = (taskId: string, tag: string) => {
        setTasks(tasks.map((i) => i.id === taskId ? {...i, tag} : i))
    }

    return <div className={`container`}>
        <AddItemForm
            onAddTask={handleAddTask}
        />

        <Tags
            tags={tags}
        />

        <Tasks
            state={tasks}
            tags={tags}
            onDeleteTask={handleDeleteTask}
            onChangeTaskTitle={handleChangeTaskTitle}
            onAddTagTask={handleAddTagTask}
            onAddTag={handleAddTag}
        />
    </div>
}


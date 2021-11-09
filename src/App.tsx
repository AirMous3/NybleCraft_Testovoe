import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {Tasks} from "./components/Tasks/Tasks";
import {Tags} from "./components/HashTags/Tags";


export type StateType = {
    title: string,
    id: string,
}


export const App = () => {

    const [tasks, setTasks] = useState<StateType[]>
    (
        [
            {title: 'magazin', id: v1()},
            {title: 'learn English', id: v1()}
        ]
    )

    const [filter, setFilter] = useState('')


    const handleAddTask = (title: string) => {
        setTasks([{title, id: v1()}, ...tasks])
    }
    const handleDeleteTask = (taskId: string) => {
        setTasks(tasks.filter(i => i.id !== taskId))
    }
    const handleChangeTaskTitle = (taskId: string, title: string) => {
        setTasks(tasks.map((i) => i.id === taskId ? {...i, title} : i))
    }

    const handleTagDelete = (tag: string) => {
        const newTasks = tasks.map((t) => {
            t.title = t.title.replace(tag, '')
            return t
        })
        setTasks(newTasks)
    }
    const handleChangeFilter = (tag: string) => {
        setFilter(tag)
    }
    let filteredTasks = tasks.filter((i) => i.title.includes(filter))

    if (filter === '') {
        filteredTasks = tasks
    }
    /* Разделяем название тасок по пробелу, фильтруем по наличию решетки,
     удаляем дубликаты с помощью Set ,*/
    const tags = Array.from(new Set(tasks.map((i) =>
        i.title.split(' ').filter(text => text[0] === '#')).flat()))


    return <div className={`container`}>
        <AddItemForm
            onAddTask={handleAddTask}
        />

        <Tags
            tags={tags}
            onTagDelete={handleTagDelete}
            onTagFilter={handleChangeFilter}
        />

        <Tasks
            tasks={filteredTasks}
            onDeleteTask={handleDeleteTask}
            onChangeTaskTitle={handleChangeTaskTitle}
        />
    </div>
}


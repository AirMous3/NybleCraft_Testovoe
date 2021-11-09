import {ChangeEvent, useState} from "react";

type PropsType = {
    onAddTask: (title: string) => void
}

export const AddItemForm = ({onAddTask}: PropsType) => {

    const [title, setTitle] = useState<string>('')

    const handleAddTask = () => {
        onAddTask(title)
        setTitle('')
    }
    const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return <div>
        <input
            placeholder='Добавьте Заметку'
            value={title}
            onChange={handleSetTitle}
            type='text'
        />

        <button onClick={handleAddTask}>addTask</button>
    </div>
}

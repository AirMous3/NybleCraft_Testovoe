import {ChangeEvent, useState} from "react";

type PropsType = {
    onSetAddTask: (title: string) => void
}

export const AddItemForm = ({onSetAddTask}: PropsType) => {

    const [title, setTitle] = useState<string>('')

    const handleAddTask = () => {
        onSetAddTask(title)
        setTitle('')
    }
    const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return <div>
        <input placeholder='Добавьте Заметку'
               value={title}
               onChange={handleSetTitle}
               type='text'/>

        <button onClick={handleAddTask}>addTask</button>
    </div>
}

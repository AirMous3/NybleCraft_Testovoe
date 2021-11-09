import {ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    taskId: string
    onSetChangeTaskTitle: (taskId: string, newTitle: string) => void

}
export const EditableSpan = ({
                                 title,
                                 onSetChangeTaskTitle,
                                 taskId,

                             }: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(title)

    const handleChangeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const handleChangeEditMode = () => {
        setEditMode(true)
    }

    const changeEditModeFalse = () => {
        setEditMode(false)
        onSetChangeTaskTitle(taskId, newTitle)
    }

    const onEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            changeEditModeFalse()
        }
    }

    return <div>
        {
            editMode
                ? <input defaultValue={title}
                         autoFocus={true}
                         onBlur={changeEditModeFalse}
                         type='text'
                         onChange={handleChangeTaskTitle}
                         onKeyPress={onEnterKeyPress}
                />

                : <span onDoubleClick={handleChangeEditMode}>{title}</span>
        }
    </div>
}

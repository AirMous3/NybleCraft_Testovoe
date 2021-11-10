import {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    title: string
    taskId: string
    onChange: (taskId: string, newTitle: string) => void

}
export const EditableSpan = ({
                                 title,
                                 onChange,
                                 taskId,

                             }: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [text, setText] = useState(title)
    useEffect(() => {
        setText(title)
    }, [title])

    const handleTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const handleEditModeChange = () => {
        setEditMode(true)
    }

    const disableEditMode = () => {
        setEditMode(false)
        onChange(taskId, text)
    }

    const onEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            disableEditMode()
        }
    }

    return <div>
        {
            editMode
                ? <input
                    value={text}
                    autoFocus={true}
                    onBlur={disableEditMode}
                    type='text'
                    onChange={handleTaskTitleChange}
                    onKeyPress={onEnterKeyPress}
                />

                : <span style={{width: '100%'}} onDoubleClick={handleEditModeChange}>{text}</span>
        }
    </div>
}

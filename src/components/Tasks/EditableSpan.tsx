import {ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    taskId: string
    onChangeTaskTitle: (taskId: string, newTitle: string) => void
    onAddTagTask: (taskId: string, tag: string) => void
    onAddTag: (tag: string[]) => void
    tags: string[]

}
export const EditableSpan = ({
                                 title,
                                 onChangeTaskTitle,
                                 taskId,
                                 onAddTagTask,
                                 onAddTag,
                                 tags

                             }: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(title)

    const handleTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const handleEditModeChange = () => {
        setEditMode(true)
    }

    const disableEditMode = () => {
        setEditMode(false)
        onChangeTaskTitle(taskId, newTitle)
        let tag = newTitle.split(' ').filter(text => text.startsWith('#'))
        if (tag) {
            if (tags.includes(tag[0])) {
                onAddTagTask(taskId, tag[0])
                return
            } else {
                onAddTagTask(taskId, tag[0])
                onAddTag(tag)
            }
        }
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
                    defaultValue={newTitle}
                    autoFocus={true}
                    onBlur={disableEditMode}
                    type='text'
                    onChange={handleTaskTitleChange}
                    onKeyPress={onEnterKeyPress}
                />

                : <span onDoubleClick={handleEditModeChange}>{newTitle}</span>
        }
    </div>
}

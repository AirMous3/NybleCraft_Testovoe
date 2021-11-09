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

    const handleTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeTaskTitle(taskId,e.currentTarget.value)
    }
    const handleEditModeChange = () => {
        setEditMode(true)
    }

    const disableEditMode = () => {
        setEditMode(false)
        let tag = title.split(' ').filter(text => text.startsWith('#'))
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
                    value={title}
                    autoFocus={true}
                    onBlur={disableEditMode}
                    type='text'
                    onChange={handleTaskTitleChange}
                    onKeyPress={onEnterKeyPress}
                />

                : <span onDoubleClick={handleEditModeChange}>{title}</span>
        }
    </div>
}

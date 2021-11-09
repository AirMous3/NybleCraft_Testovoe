import {EditableSpan} from "./EditableSpan";

type PropsType = {
    taskTitle: string
    taskId: string
    onDeleteTask: (taskId: string) => void
    onChangeTaskTitle: (taskId: string, newTitle: string) => void
    onAddTagTask: (taskId: string, tag: string) => void
    onAddTag: (tag: string[]) => void
    tags: string[]
}
export const Task = ({
                         taskId,
                         taskTitle,
                         onDeleteTask,
                         onChangeTaskTitle,
                         onAddTagTask,
                         onAddTag,
                         tags,
                     }: PropsType) => {

    const onTaskDelete = () => onDeleteTask(taskId)


    return <li style={{display: 'flex', paddingTop: '10px'}}>
        <EditableSpan
            title={taskTitle}
            tags={tags}
            taskId={taskId}
            onChangeTaskTitle={onChangeTaskTitle}
            onAddTagTask={onAddTagTask}
            onAddTag={onAddTag}

        />
        <button onClick={onTaskDelete}> x</button>
    </li>
}

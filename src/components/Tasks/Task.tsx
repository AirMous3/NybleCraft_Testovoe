import {EditableSpan} from "./EditableSpan";

type PropsType = {
    taskTitle: string
    taskId: string
    onSetDeleteTask: (taskId: string) => void
    onSetChangeTaskTitle: (taskId: string, newTitle: string) => void
}
export const Task = ({
                         taskId,
                         taskTitle,
                         onSetDeleteTask,
                         onSetChangeTaskTitle,
                     }: PropsType) => {

    const onTaskDelete = () => onSetDeleteTask(taskId)


    return <li style={{display: 'flex', paddingTop: '10px'}}>
        <EditableSpan
            title={taskTitle}
            taskId={taskId}
            onSetChangeTaskTitle={onSetChangeTaskTitle}
        />
        <button onClick={onTaskDelete}> x</button>
    </li>
}
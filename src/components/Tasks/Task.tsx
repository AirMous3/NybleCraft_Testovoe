type PropsType = {
    taskTitle: string
    taskId: string
    onSetDeleteTask: (taskId: string) => void
}
export const Task = ({
                         taskId,
                         taskTitle,
                         onSetDeleteTask
                     }: PropsType) => {

    return <li style={{display: 'flex', paddingTop: '10px'}}>
        {taskTitle}
        <button onClick={() => onSetDeleteTask(taskId)}>x</button>
    </li>
}
type PropsType = {
    taskTitle: string
    taskId: string

}
export const Task = ({taskId, taskTitle}: PropsType) => {

    return <li style={{display: 'flex', paddingTop: '10px'}}>
        {taskTitle}
    </li>
}
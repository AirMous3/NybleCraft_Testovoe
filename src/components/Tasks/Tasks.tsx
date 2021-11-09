import {StateType} from "../../App";
import {EditableSpan} from "./EditableSpan";

type PropsType = {
    tasks: StateType[]
    onDeleteTask: (taskId: string) => void
    onChangeTaskTitle: (taskId: string, newTitle: string) => void
}
export const Tasks = ({
                          tasks,
                          onDeleteTask,
                          onChangeTaskTitle,


                      }: PropsType) => {

    return <ul>
        {
            tasks.map(
                (i) => {

                    return <li key={i.id} style={{display: 'flex', paddingTop: '10px'}}>

                        <EditableSpan
                            title={i.title}
                            taskId={i.id}
                            onChange={onChangeTaskTitle}

                        />

                        <button onClick={() => onDeleteTask(i.id)}> x</button>
                    </li>
                })
        }
    </ul>
}

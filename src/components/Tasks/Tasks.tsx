import {StateType} from "../../App";
import {Task} from "./Task";

type PropsType = {
    state: StateType[]
    onSetDeleteTask: (taskId: string) => void
    onSetChangeTaskTitle: (taskId: string, newTitle: string) => void
}
export const Tasks = ({
                          state,
                          onSetDeleteTask,
                          onSetChangeTaskTitle,
                      }: PropsType) => {
    return <ul>
        {
            state.map(
                (i) =>
                    <Task
                        key={i.id}
                        taskTitle={i.title}
                        taskId={i.id}
                        onSetDeleteTask={onSetDeleteTask}
                        onSetChangeTaskTitle={onSetChangeTaskTitle}
                    />
            )
        }
    </ul>

}
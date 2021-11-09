import {StateType} from "../../App";
import {Task} from "./Task";

type PropsType = {
    state: StateType[]
    onSetDeleteTask: (taskId: string) => void
}
export const Tasks = ({
                          state,
                          onSetDeleteTask

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
                    />
            )
        }
    </ul>

}
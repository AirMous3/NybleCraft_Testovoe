import {StateType} from "../../App";
import {Task} from "./Task";

type PropsType = {
    state: StateType[]

}
export const Tasks = ({
                          state,

                      }: PropsType) => {
    return <ul>
        {
            state.map(
                (i) =>
                    <Task
                        key={i.id}
                        taskTitle={i.title}
                        taskId={i.id}
                    />
            )
        }
    </ul>

}
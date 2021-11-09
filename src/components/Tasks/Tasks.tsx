import {StateType} from "../../App";
import {Task} from "./Task";

type PropsType = {
    state: StateType[]
    onDeleteTask: (taskId: string) => void
    onChangeTaskTitle: (taskId: string, newTitle: string) => void
    onAddTagTask: (taskId: string, tag: string) => void
    onAddTag: (tag: string[]) => void
    tags: string[]
}
export const Tasks = ({
                          state,
                          onDeleteTask,
                          onChangeTaskTitle,
                          onAddTagTask,
                          onAddTag,
                          tags,
                      }: PropsType) => {
    return <ul>
        {
            state.map(
                (i) =>
                    <Task
                        key={i.id}
                        tags={tags}
                        taskTitle={i.title}
                        taskId={i.id}
                        onDeleteTask={onDeleteTask}
                        onChangeTaskTitle={onChangeTaskTitle}
                        onAddTagTask={onAddTagTask}
                        onAddTag={onAddTag}
                    />
            )
        }
    </ul>
}

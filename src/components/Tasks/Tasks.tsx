import {StateType} from "../../App";
import {EditableSpan} from "./EditableSpan";

type PropsType = {
    tasks: StateType[]
    onDeleteTask: (taskId: string) => void
    onChangeTaskTitle: (taskId: string, newTitle: string) => void
    onAddTagTask: (taskId: string, tag: string) => void
    onAddTag: (tag: string[]) => void
    tags: string[]
}
export const Tasks = ({
                          tasks,
                          onDeleteTask,
                          onChangeTaskTitle,
                          onAddTagTask,
                          onAddTag,
                          tags,
                      }: PropsType) => {

    return <ul>
        {
            tasks.map(
                (i) =>
                    <li style={{display: 'flex', paddingTop: '10px'}}>
                        <EditableSpan
                            title={i.title}
                            tags={tags}
                            taskId={i.id}
                            onChangeTaskTitle={onChangeTaskTitle}
                            onAddTagTask={onAddTagTask}
                            onAddTag={onAddTag}

                        />
                        <button onClick={() => onDeleteTask(i.id)}> x</button>
                    </li>
            )
        }
    </ul>
}

import React from "react";
import {Tag} from "./Tag";
import s from './Tags.module.scss'


type PropsType = {
    tags: string[]
    onTagDelete: (tag: string) => void
    onTagFilter: (tag: string) => void
    filter: string
}
export const Tags = ({
                         tags,
                         onTagDelete,
                         onTagFilter,
                         filter


                     }: PropsType) => {

    return <div className={s.container}>

        <div className={s.wrapper}>
            <div onClick={() => onTagFilter('')}
                 style={{paddingTop: '10px', marginRight: '20px', cursor: "pointer"}}>#all
            </div>
            {tags.map(
                (i, index) =>
                    <Tag
                        filter={filter}
                        key={index}
                        title={i}
                        onTagDelete={onTagDelete}
                        onTagFilter={onTagFilter}
                    />
            )}
        </div>
    </div>
}
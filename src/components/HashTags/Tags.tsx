import React from "react";
import {Tag} from "./Tag";
import s from './Tags.module.scss'

type PropsType = {
    tags: string[]
    onTagDelete: (tag: string) => void
    onTagFilter: (tag: string) => void
}
export const Tags = ({
                         tags,
                         onTagDelete,
                         onTagFilter

                     }: PropsType) =>
    <div className={s.container}>
        <input placeholder={'Поиск тегов'} type="text"/>
        <div className={s.wrapper}>
            <div onClick={() => onTagFilter('')} style={{paddingTop: '10px'}}>#all</div>
            {tags.map(
                (i, index) =>
                    <Tag
                        key={index}
                        title={i}
                        onTagDelete={onTagDelete}
                        onTagFilter={onTagFilter}
                    />
            )}
        </div>
    </div>

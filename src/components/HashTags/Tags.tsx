import React from "react";
import {Tag} from "./Tag";

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
    <div style={{display: 'flex', flexWrap: "wrap"}}>
        <div onClick={() => onTagFilter('#all')} style={{paddingTop: '10px'}}>#all</div>
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

import React from "react";
import {Tag} from "./Tag";

type PropsType = {
    tags: string[]
}
export const Tags = ({
                         tags,

                     }: PropsType) =>
    <div style={{display: 'flex', flexWrap: "wrap"}}>
        <div style={{paddingTop: '10px'}}>#all</div>
        {tags.map(
            (i, index) =>
                <Tag
                    key={index}
                    title={i}
                />
        )}
    </div>

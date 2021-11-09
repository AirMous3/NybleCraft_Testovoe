type PropsType = {
    title: string
    onTagDelete: (tag: string) => void
    onTagFilter: (tag: string) => void

}
export const Tag = ({
                        title,
                        onTagDelete,
                        onTagFilter,

                    }: PropsType) => {
    return <div style={{paddingLeft: '10px', paddingTop: '10px', display: "flex"}}>
        <div onClick={() => onTagFilter(title)}>
            {title}
        </div>
        <button onClick={() => onTagDelete(title)}>x</button>
    </div>

}
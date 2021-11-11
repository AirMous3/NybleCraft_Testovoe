type PropsType = {
    title: string
    onTagDelete: (tag: string) => void
    onTagFilter: (tag: string) => void
    filter: string

}
export const Tag = ({
                        title,
                        onTagDelete,
                        onTagFilter,
                        filter

                    }: PropsType) => {

    return <div style={{paddingLeft: '10px', paddingTop: '10px', display: "flex", cursor: "pointer"}}>
        <div style={filter === title ? {color: 'yellow'} : undefined} onClick={() => onTagFilter(title)}>
            {title}
        </div>
        <button onClick={() => onTagDelete(title)}>x</button>
    </div>

}
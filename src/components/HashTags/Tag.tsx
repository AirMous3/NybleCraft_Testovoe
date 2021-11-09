type PropsType = {
    title: string
    onTagDelete: (tag: string) => void

}
export const Tag = ({
                        title,
                        onTagDelete,
                    }: PropsType) => {
    return <div style={{paddingLeft: '10px', paddingTop: '10px', display: "flex"}}>
        <div>
            {title}
        </div>
        <button onClick={() => onTagDelete(title)}>x</button>
    </div>

}
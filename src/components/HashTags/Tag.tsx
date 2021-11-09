type PropsType = {
    title: string

}
export const Tag = ({
                        title,

                    }: PropsType) => {
    return <div style={{paddingLeft: '10px', paddingTop: '10px', display: "flex"}}>
        <div>
            {title}
        </div>
        <button>x</button>
    </div>

}
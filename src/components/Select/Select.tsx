type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) { // props должны являться объектом, который соответствует описанию RatingPropsType (выше)

    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}
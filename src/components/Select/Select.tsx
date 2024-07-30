import styles from './Select.module.css'
import {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) { // props должны являться объектом, который соответствует описанию RatingPropsType (выше)

    const selectedItem = props.items.find(i => i.value === props.value)
    const [active, setActive] = useState(false)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value); toggleItems()
    }


    return (
        <div className={styles.select + " " + (active ? styles.active : "")}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        key={i.value}
                        onClick={() => {onItemClick(i.value)}}>
                        {i.title}
                    </div>)}
                </div>
            }
        </div>
    )
}
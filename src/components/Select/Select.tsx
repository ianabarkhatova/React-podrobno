import styles from './Select.module.css'
import {useState, KeyboardEvent, useEffect} from "react";

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

    const [active, setActive] = useState(false)
    const [hoveredValue, setHoveredValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredValue)

    useEffect(() => {
        setHoveredValue(props.value);
    }, [props.value])


    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {

                if (props.items[i].value === hoveredValue) {
                    const nextPossible = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (nextPossible) {
                        props.onChange(nextPossible.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }


        // //пробегаемся по каждому айтему:
        // for (let i= 0; i < props.items.length; i++) {
        //     //если значение текущего айтема равно hoveredValue:
        //     if(props.items[i].value === hoveredValue) {
        //         //то устанавливаем hover на следующий элемент в списке:
        //         setHoveredValue(props.items[i+1].value)
        //         break;
        //     }
        // }
    }


    return (
        <div className={styles.select + " " + (active ? styles.active : "")} tabIndex={0} onKeyDown={onKeyDown}>

            <span className={styles.main} onClick={toggleItems}>{hoveredItem && hoveredItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => {
                            setHoveredValue(i.value)
                        }}
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : "")}
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }}>
                        {i.title}
                    </div>)}
                </div>
            }
        </div>
    )
}
import React from "react";

//создать тип компонента:
//это объект, у которого есть свойство value, являющееся number.

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValuePropsType
    onClick: (value: RatingValuePropsType) => void
}

export function Rating(props: RatingPropsType) { // props должны являться объектом, который соответствует описанию RatingPropsType (выше)

    return (<div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>)
}

/*if we want to return a group of elements, we need to wrap them in one parent element (below).
Only one element can be returned.*/

/*Props - те данные, которые входят в компонент для того, чтобы компонент мог на основе этих данных
сделать другую отрисовку*/

//Компонент ждет входные данные, чтобы отрисоваться по-разному, отреагировать на то, что в него передают.

// На входе мы дает компоненту объект, этот объект приходит в аттрибут функции, который называется props,

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValuePropsType) => void
    value: RatingValuePropsType
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star </b> : "star "}
      </span>
}


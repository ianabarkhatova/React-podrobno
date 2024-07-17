import React, {useState} from "react";

//создать тип компонента:
//это объект, у которого есть свойство value, являющееся number.

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValuePropsType
    onChange: (value: RatingValuePropsType) => void
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) { // props должны являться объектом, который соответствует описанию RatingPropsType (выше)

    let [value, setValue] = useState<RatingValuePropsType>(props.defaultValue ? props.defaultValue: 0 )

    return (<div>
        <Star selected={value > 0} setValue={() => { setValue(1); props.onChange(1); }} />
        <Star selected={value > 1} setValue={() => { setValue(2); props.onChange(2); }} />
        <Star selected={value > 2} setValue={() => { setValue(3); props.onChange(3); }} />
        <Star selected={value > 3} setValue={() => { setValue(4); props.onChange(4); }} />
        <Star selected={value > 4} setValue={() => { setValue(5); props.onChange(5); }} />

        {/*<Star selected={value > 0}/>*/}
        {/*<button onClick={() => {setValue(1)}}>1</button>*/}
        {/*<Star selected={value > 1}/>*/}
        {/*<button onClick={() => {setValue(2)}}>2</button>*/}
        {/*<Star selected={value > 2}/>*/}
        {/*<button onClick={() => {setValue(3)}}>3</button>*/}
        {/*<Star selected={value > 3}/>*/}
        {/*<button onClick={() => {setValue(4)}}>4</button>*/}
        {/*<Star selected={value > 4}/>*/}
        {/*<button onClick={() => {setValue(5)}}>5</button>*/}
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
    setValue: () => void
    // setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    // value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    return <span onClick={()=> props.setValue()}>
          {props.selected ? <b>star </b> : "star "}
      </span>
}


import React, {useState} from "react";

//создать тип компонента:
//это объект, у которого есть свойство value, являющееся number.

type UncontrolledRatingPropsType = {

}

export function UncontrolledRating(props: UncontrolledRatingPropsType) { // props должны являться объектом, который соответствует описанию RatingPropsType (выше)

    let[value, setValue] = useState(0)

    return (<div>
        <Star selected={value > 0}/>
        <button onClick={() => {setValue(1)}}>1</button>
        <Star selected={value > 1}/>
        <button onClick={() => {setValue(2)}}>2</button>
        <Star selected={value > 2}/>
        <button onClick={() => {setValue(3)}}>3</button>
        <Star selected={value > 3}/>
        <button onClick={() => {setValue(4)}}>4</button>
        <Star selected={value > 4}/>
        <button onClick={() => {setValue(5)}}>5</button>
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
  }

  function Star(props: StarPropsType) {
      return <span>{props.selected ? <b>star</b> : "star"}</span>
  }


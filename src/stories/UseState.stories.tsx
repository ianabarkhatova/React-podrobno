import React, {useMemo, useState} from "react";

export default {
    title: 'useState Demo'
}

function generateData() {
    console.log('generateData')
    return 234623462863;
}


export const Example1 = () => {
    console.log('Example1')
    // const initValue = useMemo(generateData, [])

    const[counter, setCounter] = useState(generateData)
    //инициализационное значение не должно пересчитываться каждый раз
    //если мы передадим в иниц, значение ф-ю, Реакт вызовет ее лишь один раз и запомнит значение

    //вместо counter+1 в setState можно передать ф-ю (например, changer)
    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
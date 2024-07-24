import {action} from '@storybook/addon-actions';
import React, {ChangeEvent, useRef, useState} from "react";

export default  {
    title: "input",
}

export const UncontrolledInput = () => <input/>


export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setValue(value)
    }

    return <><input onChange={onChange}/> - {value} </>
}

export const UncontrolledInputWithTrackedValueButtonPress = () => {
    const [value, setValue] = useState('')
    //создаем ссылку с помощью хука useRef
    const inputRef = useRef<HTMLInputElement>(null)

    const save = ()=> {
        //обращаемся к ссылке и берем значение
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
//привязывем ссылку к элементу input
    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value} </>
}



export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>

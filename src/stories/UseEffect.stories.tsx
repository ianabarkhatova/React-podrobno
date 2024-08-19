import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect Demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        Counter: {counter} Fake: {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetTimeoutIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutIntervalExample')

    const date = new Date()

    useEffect(() => {

        // setTimeout(() => {
        //     console.log('SetTimeout')
        //     document.title = counter.toString()
        // }, 1000)

        // setInterval(() => {
        //   console.log('SetInterval tick')
        //   setCounter(state => state + 1)
        // }, 1000)

    }, [])


    return <>
        <time
            dateTime={new Date().toISOString()}>
            {new Date().getHours()}:
            {new Date().getMinutes()}:
            {new Date().getSeconds()}
        </time>
    </>

}
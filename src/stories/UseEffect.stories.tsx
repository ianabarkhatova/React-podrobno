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

    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutIntervalExample')

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('SetTimeout')
            document.title = counter.toString()
        }, 1000)

        const intervalId = setInterval(() => {
          console.log('SetInterval tick')
          setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
            clearInterval(intervalId)
        }

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

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log('ResetEffectExample rendered')

    useEffect(() => {
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])

    return <>
        Counter: {counter} <button onClick={()=> {setCounter(counter +1 )}}>+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText(text + e.key)
        };

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])

    return <>
        Type text: {text}
    </>
}

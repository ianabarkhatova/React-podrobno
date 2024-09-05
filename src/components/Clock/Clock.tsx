import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockPropsType = {
    mode: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    hours?: number
    minutes?: number
    seconds?: number
    hoursDegrees?: number
    minutesDegrees?: number
    secondsDegrees?: number
}

const getDigitWithZero = (num: number) => num < 10 ? Number(`0${num}`) : num

export const Clock = ({mode}: ClockPropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    const hours = getDigitWithZero(date.getHours())
    const minutes = getDigitWithZero(date.getMinutes())
    const seconds = getDigitWithZero(date.getSeconds())

    // const hoursDegrees = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
    // const minutesDegrees = minutes * 6 + (seconds / 60) * 6
    // const secondsDegrees = seconds * 6;
    const hoursDegrees = hours * 30;
    const minutesDegrees = minutes * 6;
    const secondsDegrees = seconds * 6;


    return (
        <div>
            {mode === 'digital' ? (
                <DigitalClockView hours={hours} minutes={minutes} seconds={seconds}/>
            ) : (
                <AnalogClockView
                    hoursDegrees={hoursDegrees}
                    minutesDegrees={minutesDegrees}
                    secondsDegrees={secondsDegrees}
                />
            )}
        </div>
    );
};




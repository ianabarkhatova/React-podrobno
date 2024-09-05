import {ClockViewPropsType} from "./Clock";

export const DigitalClockView = ({hours, minutes, seconds}: ClockViewPropsType) => {
    return <>
        <span>{hours}</span>
        :
        <span>{minutes}</span>
        :
        <span>{seconds}</span>
    </>
}
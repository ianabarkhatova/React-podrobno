import s from "./AnalogClockView.module.css";
import {ClockViewPropsType} from "./Clock";

export const AnalogClockView = ({hoursDegrees, minutesDegrees, secondsDegrees}: ClockViewPropsType) => {
    return <div className={s.clock}>
                <span className={s.hour_hand}
                      style={{transform: `rotateZ(${hoursDegrees}deg)`}}
                ></span>
        <span className={s.min_hand}
              style={{transform: `rotateZ(${minutesDegrees}deg)`}}
        ></span>
        <span className={s.sec_hand}
              style={{transform: `rotateZ(${secondsDegrees}deg)`}}
        ></span>

        <span className={s.one}>1</span>
        <span className={s.two}>2</span>
        <span className={s.three}>3</span>
        <span className={s.four}>4</span>
        <span className={s.five}>5</span>
        <span className={s.six}>6</span>
        <span className={s.seven}>7</span>
        <span className={s.eight}>8</span>
        <span className={s.nine}>9</span>
        <span className={s.ten}>10</span>
        <span className={s.eleven}>11</span>
        <span className={s.twelve}>12</span>
    </div>
}
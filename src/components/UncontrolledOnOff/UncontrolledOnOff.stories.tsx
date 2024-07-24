import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import React from "react";



export default  {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callBack = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>


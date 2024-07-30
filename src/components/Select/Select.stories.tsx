import {action} from '@storybook/addon-actions';
import {Select} from "./Select";
import {useState} from "react";

export default {
    title: "Select",
    component: Select
};


export const SelectDefault = () => {

    const [value, setValue] = useState('2')

    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Vilnius'},
                {value: '2', title: 'Kyiv'},
                {value: '3', title: 'Amsterdam'}
            ]}
        />
        )
}


export const SelectWithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Vilnius'},
                {value: '2', title: 'Kyiv'},
                {value: '3', title: 'Amsterdam'}
            ]}
        />
    )
}




import React, {useMemo, useState} from "react";
import {Select} from "../components/Select/Select";


export default {
    title: 'useMemoSelectExample'
}

export const SelectUseMemo = () => {

    const [value, setValue] = useState('2')
    const[cities, setCities] = useState([
        {value: '1', title: 'Vilnius'},
        {value: '2', title: 'Kyiv'},
        {value: '3', title: 'Lviv'},
        {value: '4', title: 'Amsterdam'},
        {value: '5', title: 'Kaunas'},
    ])

    const newCities = useMemo(()=> {
        return cities.filter(c => c.title.toLowerCase().indexOf('l') > -1)
    }, [cities])

    return (
        <Select
            onChange={setValue}
            value={value}
            items={cities}
        />
    )
}
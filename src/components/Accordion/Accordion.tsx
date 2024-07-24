import React from 'react';

type AccordionPropsType = {
    titleValue: string
    closed?: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

type ItemType = {
    title: string
    value: any
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            title={props.titleValue}
            onChange={props.onChange}/>
        {!props.closed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}


function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div><h3 onClick={(event) => props.onChange()}>{props.title}</h3></div> // Step 5
    )
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=> {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}


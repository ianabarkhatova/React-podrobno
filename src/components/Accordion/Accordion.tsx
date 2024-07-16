import React from 'react';

//рядом с компонентом лежит тип, который определяет, что компонент должен принимать:
type AccordionPropsType = {
    titleValue: string
    closed?: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
            return <div>
                <AccordionTitle
                    title={props.titleValue}
                    onChange={props.onChange}/>
                { !props.closed && <AccordionBody/> }
            </div>
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div><h3 onClick={(event) => props.onChange()}>{props.title}</h3></div> // Step 5
    )
}

function AccordionBody() {

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


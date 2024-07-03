import React from 'react';

//рядом с компонентом лежит тип, который определяет, что компонент должен принимать:
type AccordionPropsType = {
    titleValue: string
    closed: boolean
}

function Accordion(props: AccordionPropsType) {
            return <div>
                <AccordionTitle title={props.titleValue}/>
                { !props.closed && <AccordionBody/> }
            </div>
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div><h3>{props.title}</h3></div> // Step 5
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

export default Accordion;
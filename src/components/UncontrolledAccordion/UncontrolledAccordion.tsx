import React, {useReducer} from 'react';
import {reducer, toggle_closed} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(reducer, {closed: false})


    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={toggleAccordion}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: toggle_closed})
        }}/>
        {!state.closed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div><h3 onClick={props.onClick}>{props.title}</h3></div> // Step 5
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


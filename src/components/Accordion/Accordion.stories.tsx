import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };

// export default meta;
// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: "hello",
//         closed: false,
//     },
// }

export default  {
    component: Accordion
}

const onChangeHandler = action('onChange')


export const ClosedAccordion = () => {
    return <Accordion titleValue={"Closed Accordion"}
                      closed={true}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      closed={false}
                      onChange={() => {
                      }}/>
}

export const AccordionDemo = () => {
    const [closed, setClosed] = useState(false)
    return <Accordion titleValue={"Accordion Demo"}
                      closed={closed}
                      onChange={() => {
                          setClosed(!closed)
                      }}/>
}

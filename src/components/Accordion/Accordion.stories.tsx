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

export default {
    component: Accordion
}

const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked')


export const ClosedAccordion = () => {
    return <Accordion titleValue={"Closed Accordion"}
                      closed={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={onClickCallback}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      closed={false}
                      onChange={() => {
                      }}
                      items={[
                          {title: 'Yana', value: 1},
                          {title: 'Daniel', value: 2},
                          {title: 'Lisa', value: 3}]}
                      onClick={onClickCallback}/>
}

export const AccordionDemo = () => {
    const [closed, setClosed] = useState(false)
    return <Accordion titleValue={"Accordion Demo"}
                      closed={closed}
                      onChange={() => {
                          setClosed(!closed)
                      }}
                      items={[
                          {title: 'Yana', value: 1},
                          {title: 'Daniel', value: 2},
                          {title: 'Lisa', value: 3}]}
                      onClick={(value) => {
                          alert(`user with id ${value} should be happy`)
                      }}/>
}

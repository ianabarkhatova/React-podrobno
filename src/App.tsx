import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating, RatingValuePropsType} from './components/Rating/Rating';
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    let [value, setValue] = useState<RatingValuePropsType>(0)
    let[accClosed, setAccClosed] = useState<boolean>(true)
    let[on, setOn] = useState<boolean>(false);

    return (
        <div className={"App"}>

            <UncontrolledAccordion titleValue={"Menu"}/> {/* Step 1 */}

            {/*<PageTitle title={"This is the PageTitle component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}
            {/*Article 1*/}
            {/*<Rating value={3}/> */}
            {/* Passing props to Accordion */}
            <Accordion titleValue={"Menu-1"}
                       closed={accClosed}
                       onChange={()=> setAccClosed(!accClosed)}/>
            {/*<Accordion titleValue={"Menu-2"} closed={false}/> /!* Step 1 *!/*/}

            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*Article 2*/}
            {/*<UncontrolledRating/>*/}

            {/*<Rating value={value}*/}
            {/*        onClick={setValue}*/}
            {/*/>*/}
            {/*<OnOff on={on} onChange={(on) => {setOn(on)}}/>*/}
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App; 

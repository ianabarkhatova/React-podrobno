import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  return (
    
    <div>

        <OnOff/>
        <OnOff/>
        <OnOff/>

        <UncontrolledAccordion titleValue={"Menu-1"}/> {/* Step 1 */}
        <UncontrolledAccordion titleValue={"Menu-2"}/> {/* Step 1 */}
      {/*<PageTitle title={"This is the PageTitle component"} />*/}
      {/*<PageTitle title={"My friends"} />*/}
      {/*Article 1*/}
      {/*<Rating value={3}/> */}
      {/* Passing props to Accordion */}
      {/*<Accordion titleValue={"Menu-1"} closed={true}/> /!* Step 1 *!/*/}
      {/*<Accordion titleValue={"Menu-2"} closed={false}/> /!* Step 1 *!/*/}

      {/*/!*Article 2*!/*/}
      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}

    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering")
  return (
    <h1>{ props.title }</h1>
  )
}


export default App; 

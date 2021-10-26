import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox , Input} from 'antd';
import "../../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import OptionThreeStepTwo from "../option_three_step_two";

const OptionThreeStepThree=props=> {
    const[name,setName]=useState('');
    const onChange = e => {
        console.log('Change:', e.target.value);
        setName(e.target.value);
      };
      const[moveStep,setMoveStep]=useState(false);
  const moveAhead=()=>{
    setMoveStep(true);
    console.log(moveStep);
  }
  const moveBackward=()=>{
    setMoveStep(false);
    console.log(moveStep);
  }
//   const [values,setValues]=useState([]);
//   const onChange=(checkedValues)=> {
//     console.log('checked = ', checkedValues);
//     setValues(checkedValues);
//   }
  return (
      <div>
          {moveStep===false?(
              <div>
              <Button type="link"
           className="start-btn"
           onClick={props.moveBack}
           >
              <ArrowUpOutlined /> Back
             </Button>
          <h1>Mit welchem Geschlecht identifizieren Sie sich?<span style={{color:"red"}}>*</span></h1>
          <h4>Keine Sorge, wir sortieren oder entscheiden nicht nach Ihrem Geschlecht. Diese Frage ist ausdrücklich dazu gedacht, Sie im richtigen Geschlecht ansprechen zu können!</h4>
          <Button className="start-btn" style={{width:117}} onClick={moveAhead}>weiblich</Button>
<br></br>
    <Button className="start-btn" style={{width:127}} onClick={moveAhead}>männlich</Button>
    <br></br>
         <br></br>
         </div>
           ):
          (
            <div>
            <Button type="link"
         className="start-btn"
         onClick={moveBackward}
         >
            <ArrowUpOutlined /> Back
           </Button>
        <h1>Wurden Sie bisher steuerlich beraten?<span style={{color:"red"}}>*</span></h1>
   <Button className="start-btn" style={{width:50}}>Ja</Button>
   <br></br>
       <Button className="start-btn" style={{width:74}}>Nein</Button>
       <br></br>
       </div>
          )}
    
    </div>
  );
}

export default OptionThreeStepThree;

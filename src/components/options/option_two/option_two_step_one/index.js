import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox } from 'antd';
import "../../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const OptionTwoStepOne=props=> {
    
//   const [forward, setForward]=useState(false);
//   // const [backward, setBackward]=useState(false);
//   const moveForward=()=>{
//     setForward(true);
//     console.log(forward);
//   }
//   const moveBackward=()=>{
//     setForward(false);
//     console.log(forward);
//   }
//   const [values,setValues]=useState([]);
//   const onChange=(checkedValues)=> {
//     console.log('checked = ', checkedValues);
//     setValues(checkedValues);
//   }
  return (
    <div>
         <Button type="link"
      className="start-btn"
      onClick={props.moveBack}
      >
         <ArrowUpOutlined /> Back
        </Button>
     <h1>Sollen diese Leistungen für mehrere Unternehmen erbracht werden?<span style={{color:"red"}}>*</span></h1>
<Button className="start-btn" style={{width:50}}>Ja</Button>
<br></br>
    <Button className="start-btn" style={{width:74}}>Nein</Button>
    <br></br>
    </div>
  );
}

export default OptionTwoStepOne;

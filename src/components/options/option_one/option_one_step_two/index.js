import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox } from 'antd';
import "../../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const OptionOneStepTwo=props=> {
    
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
     <h1>Sind Sie getrennt oder gemeinsam veranlagt?<span style={{color:"red"}}>*</span></h1>
     <h3>Getrennt veranlagt: eigene Einkommensteuererklärung
Gemeinsam veranlagt: gemeinsame Steuererklärung mit dem / der Lebensgatt:in</h3>
<Button className="start-btn" style={{width:205}}>Getrennt veranlagt</Button>
<br></br>
    <Button className="start-btn" style={{width:230}}>Gemeinsam veranlagt</Button>
    <br></br>
    </div>
  );
}

export default OptionOneStepTwo;

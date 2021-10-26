import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox } from 'antd';
import "../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import OptionThreeStepOne from "./option_three_step_one";

const OptionThree=props=> {
    
  const [forwardThird, setForwardThird]=useState(false);
  // const [backward, setBackward]=useState(false);
  const moveForwardThird=()=>{
    setForwardThird(true);
    console.log(forwardThird);
  }
  const moveBackwardThird=()=>{
    setForwardThird(false);
    console.log(forwardThird);
  }
  const [values,setValues]=useState([]);
  const onChange=(checkedValues)=> {
    console.log('checked = ', checkedValues);
    setValues(checkedValues);
  }
  return (
    <div>{forwardThird===false?(
<div>
         <Button type="link"
      className="start-btn"
      onClick={props.moveBack}
      >
         <ArrowUpOutlined /> Back
        </Button>
     <h1>Kommen wir zu generellen Fragen</h1>
     
    <Button className="start-btn" style={{width:122}} icon={<ArrowDownOutlined />} onClick={moveForwardThird}>Weiter</Button>
    </div>
    ):(<OptionThreeStepOne moveBack={moveBackwardThird}/>)}
      
    </div>
  );
}

export default OptionThree;

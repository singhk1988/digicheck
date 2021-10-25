import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox } from 'antd';
import "../../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import OptionOneStepTwo from "../option_one_step_two";
const OptionOneStepOne=props=> {
    
  const [up, setUp]=useState(false);
  // const [backward, setBackward]=useState(false);
  const moveUp=()=>{
    setUp(true);
    console.log(up);
  }
  const moveDown=()=>{
    setUp(false);
    console.log(up);
  }
  return (
    <div>{up===false?(<div>
      <Button type="link"
      className="start-btn"
      onClick={props.moveBack}
      >
         <ArrowUpOutlined /> Back
        </Button>
     <h1>Beginnen wir mit der Einkommensteuererklärung</h1>
     
    <Button className="start-btn" style={{width:122}} icon={<ArrowDownOutlined />} onClick={moveUp}>Weiter</Button>
    </div>):(<OptionOneStepTwo moveBack={moveDown}/>)}
         
    </div>
  );
}

export default OptionOneStepOne;

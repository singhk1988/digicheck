import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox , Input} from 'antd';
import "../../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import OptionThreeStepTwo from "../option_three_step_two";

const OptionThreeStepOne=props=> {
    const[name,setName]=useState('');
    const onChange = e => {
        console.log('Change:', e.target.value);
        setName(e.target.value);
      };
      const[forwardStep,setForwardStep]=useState(false);
  const moveForwardStep=()=>{
    setForwardStep(true);
    console.log(forwardStep);
  }
  const moveBackwardStep=()=>{
    setForwardStep(false);
    console.log(forwardStep);
  }
//   const [values,setValues]=useState([]);
//   const onChange=(checkedValues)=> {
//     console.log('checked = ', checkedValues);
//     setValues(checkedValues);
//   }
  return (
      <div>
          {forwardStep===false?(
              <div>
              <Button type="link"
           className="start-btn"
           onClick={props.moveBack}
           >
              <ArrowUpOutlined /> Back
             </Button>
          <h1>Wie lautet Ihr Vorname?<span style={{color:"red"}}>*</span></h1>
          <Input size="large" type="text" style={{ width: '60%', borderRadius:"11px" }} onChange={onChange}/>
     <br></br>
     {name.length===0?(<Button className="start-btn" style={{width:122}} disabled icon={<ArrowDownOutlined />}>Weiter</Button>):(<Button className="start-btn" style={{width:122}} icon={<ArrowDownOutlined />} onClick={moveForwardStep}>Weiter</Button>)}
         <br></br>
         </div>
          ):(
              <OptionThreeStepTwo moveBack={moveBackwardStep}/>
          )}
    
    </div>
  );
}

export default OptionThreeStepOne;

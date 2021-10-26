import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox , Input} from 'antd';
import "../../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import OptionThreeStepThree from "../option_three_step_three";

const OptionThreeStepTwo=props=> {
    const[surName,setSurname]=useState('');
    const onChange = e => {
        console.log('Change:', e.target.value);
        setSurname(e.target.value);
      };
      const[step,setStep]=useState(false);
  const moveStep=()=>{
    setStep(true);
    console.log(step);
  }
  const backStep=()=>{
    setStep(false);
    console.log(step);
  }
//   const [values,setValues]=useState([]);
//   const onChange=(checkedValues)=> {
//     console.log('checked = ', checkedValues);
//     setValues(checkedValues);
//   }
  return (
      <div>{step===false?(
        <div>
        <Button type="link"
     className="start-btn"
     onClick={props.moveBack}
     >
        <ArrowUpOutlined /> Back
       </Button>
    <h1>Wie lautet Ihr Nachname?<span style={{color:"red"}}>*</span></h1>
    <Input size="large" type="text" style={{ width: '60%', borderRadius:"11px" }} onChange={onChange}/>
<br></br>
{surName.length===0?(<Button className="start-btn" style={{width:122}} disabled icon={<ArrowDownOutlined />}>Weiter</Button>):(<Button className="start-btn" style={{width:122}} icon={<ArrowDownOutlined />} onClick={moveStep}>Weiter</Button>)}
   <br></br>
   </div>
      ):(<OptionThreeStepThree moveBack={backStep}/>)}
    
    </div>
  );
}

export default OptionThreeStepTwo;

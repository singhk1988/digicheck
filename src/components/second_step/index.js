import React, { useState } from "react";
import { Button } from 'antd';
import "../question/styles.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import OptionOne from "../options/option_one";
import OptionTwo from "../options/option_two";
import OptionThree from "../options/option_three";

const SecondStep=props=> {
    const[privatPerson,setprivatPerson]=useState(false);
    const[unterNehmen,setUnternehmen]=useState(false);
    const[both,setBoth]=useState(false);
    const[back,setBack]=useState(false);
    const moveBack=()=>
    {
        setBack(false);
        setprivatPerson(false);
        setUnternehmen(false);
        setBoth(false);
    }
    const clickprivatPerson=()=>{
        console.log('privatPerson');
        console.log(privatPerson);
        console.log(unterNehmen);
        console.log(both);
        setprivatPerson(true);
        setUnternehmen(false);
        setBoth(false);
    }
    const clickUnternehmen=()=>{
        console.log('Unternehmen');
        console.log(privatPerson);
        console.log(unterNehmen);
        console.log(both);
        setprivatPerson(false);
        setUnternehmen(true);
        setBoth(false);
    }
    const clickBoth=()=>{
        console.log('both');
        console.log(privatPerson);
        console.log(unterNehmen);
        console.log(both);
        setprivatPerson(false);
        setUnternehmen(false);
        setBoth(true);
    }
    console.log("props",props);
  return (
    <div style={{paddingLeft:"30px",paddingTop:"50px"}}>
      {privatPerson===false && unterNehmen===false && both===false?(<div>
        <Button type="link"
      className="start-btn"
      onClick={props.moveBackward}
      >
         <ArrowUpOutlined /> Back
        </Button>
       <h1>In welchem Bereich möchten Sie steuerlich beraten werden?</h1>
       <Button style={{width:"174px"}} 
      className="start-btn"
      onClick={clickprivatPerson}
      >
          Privatperson
        </Button>
        <br></br>
        <Button style={{width:"174px"}} 
      className="start-btn"
      onClick={clickUnternehmen}
      >
          Unternehmen
        </Button>
        <br></br>
        <Button style={{width:"321px"}} 
      className="start-btn"
      onClick={clickBoth}
      >
         Privatperson und Unternehmen
        </Button>
      </div>):(<div>{privatPerson===true && unterNehmen===false && both===false?(<OptionOne moveBack={moveBack}/>):(<div>{unterNehmen===true && privatPerson==false && both===false?(<OptionTwo moveBack={moveBack}/>):(<OptionThree moveBack={moveBack}/>)}</div>)}</div>)}
      
      {/* <Button type="primary" 
      className="start-btn"
      onClick={props.moveForward}
      >
          Start
        </Button> */}
      
      
    </div>
  );
}

export default SecondStep;

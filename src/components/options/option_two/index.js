import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox } from 'antd';
import "../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const OptionTwo=props=> {
    
  const [forward, setForward]=useState(false);
  // const [backward, setBackward]=useState(false);
  const moveForward=()=>{
    setForward(true);
    console.log(forward);
  }
  const moveBackward=()=>{
    setForward(false);
    console.log(forward);
  }
  const [values,setValues]=useState([]);
  const onChange=(checkedValues)=> {
    console.log('checked = ', checkedValues);
    setValues(checkedValues);
  }
  return (
    <div>
         <Button type="link"
      className="start-btn"
      onClick={props.moveBack}
      >
         <ArrowUpOutlined /> Back
        </Button>
     <h1>Welche Leistung:en soll:en für Ihr:e Unternehmen erbracht werden?<span style={{color:"red"}}>*</span></h1>
     <h5>(Mehrfachantworten möglich)</h5>
     <Checkbox.Group style={{ width: '100%',fontSize:"25px" }} onChange={onChange}>
     <Checkbox value="Steuerberatung" className="checkbox-opt">Steuerberatung</Checkbox>
     <br></br>
     <Checkbox value="Jahresabschlusserstellung" className="checkbox-opt">Jahresabschlusserstellung</Checkbox>
     <br></br>
     <Checkbox value="Finanzbuchhaltung" className="checkbox-opt">Finanzbuchhaltung</Checkbox>
     <br></br>
     <Checkbox value="Lohnbuchhaltung" className="checkbox-opt">Lohnbuchhaltung</Checkbox>
<br></br>
<Checkbox value="Betriebswirtschaftliche Beratung" className="checkbox-opt">Betriebswirtschaftliche Beratung</Checkbox>
     <br></br>
     <Checkbox value="Sonstiges" className="checkbox-opt">Sonstiges</Checkbox>
     <br></br>
     </Checkbox.Group>
     {values.length===0?(<Button className="start-btn" style={{width:122}} disabled icon={<ArrowDownOutlined />}>Weiter</Button>):(<Button className="start-btn" style={{width:122}} icon={<ArrowDownOutlined />}>Weiter</Button>)}
    </div>
  );
}

export default OptionTwo;

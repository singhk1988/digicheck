import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button, Checkbox } from 'antd';
import "../../question/styles.css";
import {RightOutlined} from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const OptionOne=props=> {
    
  const [ahead, setAhead]=useState(false);
  // const [backward, setBackward]=useState(false);
  const moveAhead=()=>{
    setAhead(true);
    console.log('ahead status:',ahead);
  }
  const moveNotahead=()=>{
    setAhead(false);
    console.log(ahead);
  }
  const [values,setValues]=useState([]);
  const onChange=(checkedValues)=> {
    console.log('checked = ', checkedValues);
    setValues(checkedValues);
  }
  return (
    <div>
        {ahead===false?(<div>
        <Button type="link"
      className="start-btn"
      onClick={props.moveBack}
      >
         <ArrowUpOutlined /> Back
        </Button>
     <h1>Bei welchen Themen suchen Sie Unterstützung?<span style={{color:"red"}}>*</span></h1>
     <h5>(Mehrfachantworten möglich)</h5>
     <Checkbox.Group style={{ width: '100%',fontSize:"25px" }} onChange={onChange}>
     <Checkbox value="Einkommensteuererklärung" className="checkbox-opt">Einkommensteuererklärung</Checkbox>
     <br></br>
     <Checkbox value="Erbschaft- und Schenkungsteuer" className="checkbox-opt">Erbschaft- und Schenkungsteuer</Checkbox>
     <br></br>
     <Checkbox value="Beratung zu Kryptowährungen" className="checkbox-opt">Beratung zu Kryptowährungen</Checkbox>
     <br></br>
     <Checkbox value="Testamentsvollstreckung" className="checkbox-opt">Testamentsvollstreckung</Checkbox>
<br></br>
<Checkbox value="Private Vermögensplanung" className="checkbox-opt">Private Vermögensplanung</Checkbox>
     <br></br>
     <Checkbox value="Sonstiges" className="checkbox-opt">Sonstiges</Checkbox>
     <br></br>
     </Checkbox.Group>
     {values.length===0?(<Button className="start-btn" style={{width:122}} disabled icon={<ArrowDownOutlined />}>Weiter</Button>):(<Button className="start-btn" style={{width:122}} icon={<ArrowDownOutlined onClick={moveAhead} />}>Weiter</Button>)}
    </div>):(<div>hello</div>)}
         
    </div>
  );
}

export default OptionOne;

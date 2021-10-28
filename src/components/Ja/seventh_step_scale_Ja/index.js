import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../../start/styles.css";
import { Radio } from "antd";
import Eighth from "../eighth_step_scale_Ja/index";

const Seventh=props=> {
   const [scale,setScale]=useState('');
   const[ahead,setAhead]=useState(false);
  const onScale=(e)=>{
    console.log(`radio checked :${e.target.value}`);
    setScale(e.target.value);
    setAhead(true);
  }
  const back=()=>
  {
      setAhead(false);
  }
  const ar=[0,1,2,3,4,5,6,7,8,9,10];
 
  return (<div>{ahead===false?(
<Row>
        <Col span={24} className="start_title">
          <div className="question-container">
            <h2 className="question">
            Wie hoch schätzen Sie die den Grad der Standardisierung in diesem Prozess?
            </h2>
            {/* <h3>Vollständig digitale Erstellung, ohne Kontierung auf Papierbelegen</h3> */}
            <div className="single-question-container">
              <div>
                <Radio.Group onChange={onScale} size="large" buttonStyle="solid" value={scale}>
                      {ar.map(i=><Radio.Button className="radio-tab" value={i}>{i}</Radio.Button>)}
                </Radio.Group>
                </div>
                <Row justify="end">
      <Col span={4}></Col>
      <Col span={4}></Col>
      <Col span={4}></Col>
              <Col span={4} offset={8}>
                <Button
                style={{marginTop:10}}
                type="primary"
                icon={<ArrowUpOutlined/>}
                onClick={props.moveBack}
              >
                Back
              </Button></Col>
    </Row>
            </div>

            
           
        </div>
        </Col>
      </Row>
  ):(<Eighth moveBack={back}/>)}


   </div>
  );
}

export default Seventh;


import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../start/styles.css";
import questions from "../../Questions.json";
import { Radio } from "antd";
import Fourth from "../fourth_step_scale";

const Third=props=> {
   const [radioOption,setRadiooption]=useState(''); 
   const[front,setFront]=useState(false);
  const onChange=(e)=> {
    console.log(`radio checked:${e.target.value}`);
    setRadiooption(e.target.value);
    setFront(true);
  }
  const back=()=>
  {
      setFront(false);
  }
  const arr=[0,1,2,3,4,5,6,7,8,9,10];
 
  return (
    <div>{front===false?(
<Row>
        <Col span={24} className="start_title">
          <div className="question-container">
            <h2 className="question">
            Wie viel Prozent der Belege Ihrer Mandanten für die Finanzbuchhaltung erhalten Sie bereits digital?
            </h2>
            <div className="single-question-container">
              <div>
                <Radio.Group onChange={onChange} size="large" buttonStyle="solid" value={radioOption}>
                      {arr.map(i=><Radio.Button className="radio-tab" value={i}>{i}</Radio.Button>)}
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
    ):(
        <Fourth moveBack={back}/>
    )}
      
    </div>
  );
}

export default Third;


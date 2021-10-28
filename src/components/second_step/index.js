import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../start/styles.css";
import questions from "../../Questions.json";
import { Radio } from "antd";
import Third from "../third_step_scale";

const Second=props=> {
  const [forward,setForward]=useState(false);
  const moveForward=()=>{
    setForward(true);
  }
  const noForward=()=>
  {
    setForward(false);
  }

  return (
    <div>{forward===false?(
        <Row>
        <Col span={24} className="start_title">
          <div className="question-container">
            <h2 className="question">
            Funktionen Kanzlei
            </h2>
            <Row justify="end">
      <Col span={4}></Col>
      <Col span={4}></Col>
      <Col span={4}><Button
                type="primary"
                icon={<ArrowDownOutlined />}
                onClick={moveForward}
                style={{marginLeft:"140px"}}
              >
                Next
              </Button>
              </Col>
              <Col span={4} offset={8}>
              <Button
                type="primary"
                icon={<ArrowUpOutlined/>}
                onClick={props.moveBack}
                style={{marginLeft:"55px"}}
              >
                Back
              </Button></Col>
    </Row>
    
              
          </div>
        </Col>
      </Row> 
    ):(<Third moveBack={noForward}/>)}
      
    </div>
  );
}

export default Second;

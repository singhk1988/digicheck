import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../start/styles.css";
import questions from "../../Questions.json";
import { Radio } from "antd";
import Seventh from "../Ja/seventh_step_scale_Ja/index";

const Sixth=props=> {
  
const [buttonOption,setButtonoption]=useState('');
const [forward,setForward]=useState(false);
const moveBack=()=>
{
  setForward(false);
}
  return (
    <div>{forward===false?(
      <Row>
      <Col span={24} className="start_title">
        <div className="question-container">
          <h2 className="question">
          Haben Sie einen standardisierten / Automatisierten Prozess für das Onboarding von Mandanten in DATEV Unternehmen Online?
          </h2>
          {/* for Multiple Choice type question */}

         
              <div className="multiple-choice-container">
                
                      <button
                        onClick={() => {
                          setButtonoption('Ja');
                          setForward(true);
                        }}
                        className={
                            buttonOption=='Ja'?
                           "active-radio-multiple-choice"
                            : "radio-multiple-choice"
                        }
                      >
                        Ja
                      </button>
                      <button
                      onClick={() => {
                          setButtonoption('Nein');
                        }}
                        className={
                            buttonOption=='Nein'?
                           "active-radio-multiple-choice"
                            : "radio-multiple-choice"
                        }
                      >
                      Nein
                      </button>
                   
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
      </Col>
    </Row>
    ):(<Seventh moveBack={moveBack}/>)}
     
      
     
    </div>
  );
}

export default Sixth;


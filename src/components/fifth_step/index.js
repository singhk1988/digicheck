import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../start/styles.css";
import questions from "../../Questions.json";
import { Radio } from "antd";
import Sixth from "../sixth_step";

const Fifth=props=> {
  
const [buttonOption,setButtonoption]=useState('');
const [forward,setForward]=useState(false);
const backWard=()=>{
    setForward(false);
}
  return (
    <div>{forward===false?(
<Row>
        <Col span={24} className="start_title">
          <div className="question-container">
            <h2 className="question">
            Nutzen Sie eine Prozessdokumentation für die Zusammenarbeit mit Ihren Mandanten?
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
                            setForward(true);
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
      
    ):(<Sixth moveBack={backWard}/>)}
      
     
    </div>
  );
}

export default Fifth;


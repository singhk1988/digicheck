import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../../start/styles.css";
import { Radio } from "antd";
import Seventh from "../seventh_step_scale_Ja";
import Twelveth from "../twelveth_step_ja";

const Eleventh=props=> {
  
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
          Nutzen Sie alternative Cloud-Lösungen um Belege und Informationen von Mandanten einzusammeln?
          </h2>
          <h3>z.B. Dracoon, Kanzlei.land oder 5f Software</h3>
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
    ):(<Twelveth moveBack={moveBack}/>)}
     
      
     
    </div>
  );
}

export default Eleventh;


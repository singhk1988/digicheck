import React, { useState, useRef, useEffect } from "react";
import { Button } from "antd";
import Start from "../start";
import Funktionen from "../funktionen_2/index";
import questions from "../../Questions.json";
function Question() {
  // const [activeStep, setActiveStep] = useState(0)
  // let body = ''

  // if (activeStep === 0) {
  //   body = <Start />
  // } else if (activeStep === 1) {
  //   body = <Funktionen />
  // }
  // const onClickContinue = () => {
  //   const nextStep = activeStep + 1
  //   setActiveStep(nextStep < 8 ? nextStep : 7)
  // }

  // const onClickReturn = () => {
  //   const prevStep = activeStep - 1
  //   setActiveStep(prevStep > 0 ? prevStep : 0)
  // }

  let data = questions.data.definition.data.clusters;
  return (
    <div>
      <Start />
      {/* <Funktionen /> */}
      {/* <div className="actions">
        <Button onClick={onClickReturn}>Zurück</Button>
        <Button
          className="home-continue-button"
          style={{
            marginLeft: '15px',
            background: '#2C88FF',
            border: '1px solid #2C88FF',
          }}
          onClick={onClickContinue}
          variant="primary"
        >
          Weiter
        </Button>
      </div> */}
    </div>
  );
}

export default Question;

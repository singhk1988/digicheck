import React, { useState } from "react";
import "../styles/style.css";
import { Button } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, CheckOutlined } from "@ant-design/icons";
import Scale from "./Scale";
import Choice from "./Choice";
import CheckBox from "./CheckBox";
import Matrix from "./Matrix";
import QuestionsData from "../QuestionsData";


function QuestionInput({ arr, question, value, handleOnChange }) {

    function handleScale(e) {
        handleOnChange(e.target.value, question.childID)
    }

    function handleChoice(e, key) {
        handleOnChange(e.target.value, key)
    }

    function handleCheckBox(ans) {
        handleOnChange(ans, question.childID)
    }

    function handleMatrix(ans) {
        handleOnChange(ans, question.childID)
    }

    if (question.type === "scale") {
        return <Scale value={value} arr={arr} handleScale={handleScale} scaleMark={question.scaleMark} />
    }

    else if (question.type === "multiple-choice") {
        return <Choice value={value} handleChoice={handleChoice} options={question.options} />
    }

    else if (question.type === "checkbox") {
        return <CheckBox
            value={value}
            checkboxOptions={question["checkbox-options"]}
            handleCheckBox={handleCheckBox}
        />

    }

    else if (question.type === "matrix") {
        return <Matrix value={value} labels={question.labels} matrixOptions={question["matrix-options"]} handleMatrix={handleMatrix} />
    }

    else if (question.type === "submit") {
        return <Button type="primary" style={{ backgroundColor: "#008000", marginBottom: "14px" }} icon={<CheckOutlined />}>Submit</Button>

    }

    else {
        return <></>
    }
}

function Question() {

    const questionData = React.useMemo(() => new QuestionsData(), []);
    const [currentQid, setCurrentQid] = useState(1);
    const [currentAns, setCurrentAns] = useState();
    const currentQuestion = questionData.getQuestion(currentQid);

    const arr = [];
    if (currentQuestion.type === "scale") {
        for (var i = currentQuestion.scale.low; i <= currentQuestion.scale.high; i++) {
            arr.push(i);
        }
    }

    function handleBack() {
        let tempId = questionData.popAnswer()
        setCurrentQid(tempId.id);
        setCurrentAns(tempId.value);
    }

    function setAndGoForward(qid, ans, nextChildID) {
        questionData.setAnswer(qid, ans);
        setCurrentQid(nextChildID);
        setCurrentAns(null);
    }

    function handleNext() {
        setAndGoForward(currentQid, currentAns, currentQuestion.childID);
    }

    const handleOnChange = (ans, nextChildID)=>{
        if(!nextChildID) {
            nextChildID = currentQuestion.childID;
        }
        if(!currentQuestion.nextButton) {
            setAndGoForward(currentQid, ans, nextChildID);
        } else {
            setCurrentAns(ans);
        }
    }

    return (
        <div>
            <div className="question-container">
                {currentQuestion.backButton ? <Button type="link" onClick={handleBack} className="back" icon={<ArrowUpOutlined />}>Back</Button> : null}
                <h2 className="question">{currentQuestion.question}</h2>
                <h3>{currentQuestion.description}</h3>
                <QuestionInput
                    key={currentQuestion.id}
                    arr={arr}
                    question={currentQuestion}
                    value={currentAns}
                    handleOnChange={handleOnChange}
                />
                {currentQuestion.nextButton ? <Button type="primary" onClick={()=>handleNext()} icon={<ArrowDownOutlined />}>Next</Button> : null}
            </div>
        </div >
    );

}

export default Question;

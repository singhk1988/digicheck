import React, { useState } from "react";
import "../styles/style.css";
import { Button } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, CheckOutlined } from "@ant-design/icons";
import Scale from "./Scale";
import Choice from "./Choice";
import CheckBox from "./CheckBox";
import Matrix from "./Matrix";
import QuestionsData from "../QuestionsData";


function QuestionInput({ arr, question, handleOnChange }) {
    const [checkValues, setCheckValues] = useState([]);

    function handleScale(e) {
        // questionData.setAnswer(currentQid, e.target.value);
        // setCurrentQid(currentQuestion.childID);
        handleOnChange(e.target.value, question.childID)
    }

    function handleChoice(e, key) {
        handleOnChange(e.target.value, key)
    }

    const onChangeCheckBox = (ans)=> {
        setCheckValues(ans)
        console.log(checkValues)
    }

    function handleCheckBox() {
        // handleOnChange(checkValues, question.childID)
        console.log("checkbox dismounted", checkValues)
    }


    function handleMatrix(ans) {
  
        // questionData.setAnswer(currentQid, ans);
        // setCurrentQid(currentQuestion.childID)
        handleOnChange(ans, question.childID)
    }
    

    if (question.type === "scale") {
        return  <Scale arr={arr} handleScale={handleScale} scaleMark={question.scaleMark} />
    }

    else if (question.type === "multiple-choice") {
        return  <Choice handleChoice={handleChoice} options={question.options} />
    }

    else if (question.type === "checkbox") {
        return  <CheckBox 
                    handleCheckBox={handleCheckBox} 
                    checkboxOptions={question["checkbox-options"]}
                    // checkValues={checkValues} 
                    // setCheckValues={setCheckValues}
                    onChangeCheckBox = {onChangeCheckBox}
                />
            
    }

    else if (question.type === "matrix") {
        return  <Matrix labels={question.labels} matrixOptions={question["matrix-options"]} handleMatrix={handleMatrix} />
    }

    else if (question.type === "submit") {
        return  <Button type="primary" style={{ backgroundColor: "#008000", marginBottom: "14px" }} icon={<CheckOutlined />}>Submit</Button>
        
    }

    else{
        return <></>
    }
}

function Question() {

    const questionData = React.useMemo(() => new QuestionsData(), []);
    const [currentQid, setCurrentQid] = useState(1);
    const currentQuestion = questionData.getQuestion(currentQid);

    const arr = [];
    if (currentQuestion.type === "scale") {
        for (var i = currentQuestion.scale.low; i <= currentQuestion.scale.high; i++) {
            arr.push(i);
        }
    }

    function handleBackward() {
        console.log("handleBackward Clicked");
        let tempId = questionData.popAnswer()
        setCurrentQid(tempId.id)
    }

    function handleForward() {
        if(currentQuestion.type === "text"){
            questionData.setAnswer(currentQid, null);
            setCurrentQid(currentQuestion.childID);

        }
        else{
            setCurrentQid(currentQuestion.childID);
        }
    }

    const handleOnChange = (ans, id)=>{
        questionData.setAnswer(currentQid, ans);
        if(currentQuestion.type === "scale" || currentQuestion.type === "multiple-choice"){
            setCurrentQid(id);
        }
    }


    // console.log(questionData);

    return (
        <div>
            <div className="question-container">
                {currentQuestion.backButton ? <Button type="link" onClick={handleBackward} className="back" icon={<ArrowUpOutlined />}>Back</Button> : null}
                <h2 className="question">{currentQuestion.question}</h2>
                <h3>{currentQuestion.description}</h3>
                <QuestionInput
                    arr={arr}
                    question={currentQuestion}
                    // handleBackward={handleBackward}
                    // handleForward={handleForward}
                    handleOnChange={handleOnChange}
                    // handleScale={handleScale}
                    // handleChoice={handleChoice}
                    // handleCheckBox={handleCheckBox}
                    // handleMatrix={handleMatrix}
                />
                {currentQuestion.nextButton ? <Button type="primary" onClick={handleForward} icon={<ArrowDownOutlined />}>Next</Button> : null}
            </div>

        </div >

    )

}

export default Question;

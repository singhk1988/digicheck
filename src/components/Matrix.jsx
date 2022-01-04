import React, { useState } from 'react';
import '../styles/style.css';
import { Radio } from "antd";
import { Button } from "antd";
// import { ArrowDownOutlined } from '@ant-design/icons';

function Matrix(props) {
    const [ans, setAns] = useState({});

    function handleOnChange(e, ques) {
        setAns((prevAns) => {
            return {
                ...prevAns,
                [ques]: e.target.value, 
            }
            
        })

        props.handleMatrix(ans)
    }
    // console.log(currentElement)
    return (
        <>
            <div className="matrix-index-title">
                {
                    props.labels.map(label =>
                        <span className="matrix-index">{label.labelId}</span>)
                }
            </div>


            {props.matrixOptions.map(matrix =>
                <div className="matrix-radio-container">
                    <p className="matrix-radio-option-title">{matrix.option}</p>
                    <p className="radio-space"></p>
                    <Radio.Group onChange={(e) => handleOnChange(e, matrix.option)}>

                        {props.labels.map(label => <Radio
                            className="matrix-radio"
                            value={label.labelId}
                            checked={ans[matrix.option]===label.labelId}
                        ></Radio>)}
                    </Radio.Group>
                </div>
            )}

            {/* <Button type="primary" onClick={()=>props.handleMatrix(ans)} icon={<ArrowDownOutlined />}>Next</Button> */}
        </>
    )
}

export default Matrix

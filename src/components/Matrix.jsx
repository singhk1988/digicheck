import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { Radio } from "antd";

function Matrix(props) {
    const [ans, setAns] = useState({});

    function handleOnChange(e, ques) {
        setAns((prevAns) => {
            return {
                ...prevAns,
                [ques]: e.target.value,
            }
        });
    }

    useEffect(()=>{
        props.handleMatrix(ans)
    }, [ans]);

    return (
        <>
            <div className="matrix-index-title">
                {
                    props.labels.map(label =>
                        <span className="matrix-index">{label.labelId}</span>)
                }
            </div>

            {props.matrixOptions.map(matrix => {
                let defaultValue = props.value && props.value[matrix.option];
                return (
                    <div className="matrix-radio-container">
                        <p className="matrix-radio-option-title">{matrix.option}</p>
                        <p className="radio-space"></p>
                        <Radio.Group defaultValue={defaultValue} onChange={(e) => handleOnChange(e, matrix.option)}>
                            {props.labels.map(label => <Radio
                                className="matrix-radio"
                                value={label.labelId.toString()}
                            ></Radio>)}
                        </Radio.Group>
                    </div>
                )
            })}
        </>
    )
}

export default Matrix

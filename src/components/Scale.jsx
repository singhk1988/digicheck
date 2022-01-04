import React from 'react'
import { Radio } from "antd";
import '../styles/style.css'

function Scale(props) {

    return (
        <>
            <div className="single-question-container">
                <Radio.Group size="large" buttonStyle="solid" >
                    {props.arr.map(i => <Radio.Button onClick={props.handleScale} className="radio-tab"  value={i}>{i}</Radio.Button>)}
                </Radio.Group>

                <div className="eqi-container">
                    {props.scaleMark.map(scaleMark => (<div className="class-mark">{scaleMark}</div>))}
                </div>
            </div>
        </>
    )
}

export default Scale

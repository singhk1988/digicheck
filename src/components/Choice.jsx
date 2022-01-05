import React from 'react'
import { Radio } from "antd";
import { Space } from "antd";
import '../styles/style.css'
import { Button } from "antd";

function Choice(props) {
    return (
        <>
            <div className="multiple-choice-container">

                <Radio.Group
                    buttonStyle="solid"
                    size="large"
                    defaultValue={props.value}
                >
                    <Space direction="vertical">
                        {props.options.map(option => <Button type="primary" onClick={()=>props.handleChoice(option.childID, option.childID)} key={option.childID} value={option.option}>
                            {option.option}
                        </Button>)}
                    </Space>
                </Radio.Group>


            </div>
        </>
    )
}

export default Choice

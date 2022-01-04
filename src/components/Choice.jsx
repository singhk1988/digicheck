import React from 'react'
import { Radio } from "antd";
import { Space } from "antd";
import '../styles/style.css'

function Choice(props) {
    return (
        <>
            <div className="multiple-choice-container">

                <Radio.Group
                    buttonStyle="solid"
                    size="large"
                >
                    <Space direction="vertical">
                        {props.options.map(option => <Radio.Button className='multi-choice' onClick={(e)=>props.handleChoice(e, option.childID)} key={option.childID} value={option.option}>
                            {option.option}
                        </Radio.Button>)}
                    </Space>
                </Radio.Group>


            </div>
        </>
    )
}

export default Choice

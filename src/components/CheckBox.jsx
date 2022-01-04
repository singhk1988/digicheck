import React, { useEffect, useState } from 'react'
import { Col, Checkbox } from "antd";
// import { Button } from "antd";
// import { ArrowDownOutlined } from '@ant-design/icons'
import '../styles/style.css'


function CheckBox(props) {
  return (
    <>
      <div className="single-question-container">
        <Checkbox.Group defaultValue={props.value} style={{ width: '100%', fontSize: "25px" }} onChange={props.handleCheckBox}>
          {props.checkboxOptions.map(option =>
            <Col span={24}>

              <Checkbox value={option.option}>
                {option.option}
              </Checkbox>

            </Col>
          )}
        </Checkbox.Group>
      </div>
    </>
  )
}

export default CheckBox

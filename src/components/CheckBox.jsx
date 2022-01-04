import React, { useEffect, useState } from 'react'
import { Col, Checkbox } from "antd";
// import { Button } from "antd";
// import { ArrowDownOutlined } from '@ant-design/icons'
import '../styles/style.css'


function CheckBox(props) {

  // const [checkValues, setCheckValues] = useState([]);

  // function handleOnChange(e) {
  //   // setCheckValues(e);
  //   props.handleCheckBox(e)
  // }

  useEffect(()=>{
    return () =>{
      props.handleCheckBox()
    } 
  }, [])

  return (
    <>
      <div className="single-question-container">
        <Checkbox.Group style={{ width: '100%', fontSize: "25px" }} onChange={props.onChangeCheckBox}>
          {props.checkboxOptions.map(option =>
            <Col span={24}>

              <Checkbox value={option.option}>
                {option.option}
              </Checkbox>

            </Col>
          )}
        </Checkbox.Group>
      </div>
      {/* <Button type="primary" onClick={() => props.handleCheckBox(checkValues)} icon={<ArrowDownOutlined />}>Next</Button> */}
    </>
  )
}

export default CheckBox

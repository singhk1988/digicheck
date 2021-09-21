import React from 'react'
import { Row, Col, Checkbox } from 'antd'
import './style.css'

function SelectButton() {
  const onChange = (checkedValues) => {
    console.log(checkedValues)
  }

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="select_container">
            <div className="select_title">
              <span>
                Wie erfolgt die Abwicklung des Zahlungsverkehrs bei Ihren
                Mandanten?
              </span>
            </div>
            <span style={{ marginLeft: '20%' }}>
              (Mehrfachantworten möglich)
            </span>
            <Col span={9} style={{ marginLeft: '20%', marginTop: '20px' }}>
              <div className="select_click">
                <Checkbox.Group>
                  <Checkbox onChange={onChange}>
                    Durch den Mandanten selbst über DATEV Unternehmen Online
                  </Checkbox>
                  <Checkbox onChange={onChange}>
                    Durch die Kanzlei über den DATEV Zahlungsverkehr
                  </Checkbox>
                  <Checkbox onChange={onChange}>
                    Durch Drittanwendungen des Mandanten außerhalb von DATEV
                  </Checkbox>
                  <Checkbox onChange={onChange}>Sonstiges</Checkbox>
                </Checkbox.Group>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SelectButton

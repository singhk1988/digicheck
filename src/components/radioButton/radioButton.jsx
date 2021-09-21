import React from 'react'
import { Row, Col, Table, Space, Radio } from 'antd'
import './styles.css'

function RadioButton() {
  const { Column, ColumnGroup } = Table
  const data = [
    {
      key: '1',
      firstName: 'DATEV.de/upload',
    },
    {
      key: '2',
      firstName: 'DATEV Upload Mail nach jeweiligem Belegtyp',
    },
    {
      key: '3',
      firstName: 'DATEV Upload Mobile App',
    },
    {
      key: '4',
      firstName: 'DATEV Belegtransfer online',
    },
    {
      key: '5',
      firstName: 'DATEV Connected online',
    },
  ]
  const [value, setValue] = React.useState()

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="radio_container">
            <div className="radio_title">
              <span>
                Wie vertraut sind Ihre Mandanten in Bezug auf die verschiedenen
                Möglichkeiten, Belege in DATEV Unternehmen Online hochzuladen?
              </span>
            </div>
            <span style={{ marginLeft: '20%' }}>
              (1=weinger vertraut,5=sehr vertraut)
            </span>
            <Col>
              <div className="radio_table">
                <Table dataSource={data} style={{ fontSize: '10px' }}>
                  <ColumnGroup>
                    <Column title="" dataIndex="firstName" key="firstName" />
                  </ColumnGroup>
                  <Column
                    title="1 2 3 4"
                    key="action"
                    render={() => (
                      <Space size="middle">
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={1}></Radio>
                          <Radio value={2}></Radio>
                          <Radio value={3}></Radio>
                          <Radio value={4}></Radio>
                        </Radio.Group>
                      </Space>
                    )}
                  />
                </Table>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RadioButton

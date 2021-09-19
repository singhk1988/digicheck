import React from 'react'
import { Button, Row, Col, Layout } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import './styles.css'

function Start() {
  const { Footer } = Layout
  return (
    <div>
      <Row>
        <Col span={24}>
          <h2 className="start_title">
            <span> Start Video </span>
          </h2>
        </Col>
        <Row>
          <Col span={24}>
            <div className="button_start">
              <Button
                type="primary"
                icon={<ArrowDownOutlined />}
                onClick={() => this.enterLoading(1)}
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Row>
      <Row>
        <Layout>
          <Footer style={{ bottom: '0px' }}>
            <Col span={18}>Powered by Tripetto</Col>
            <Col span={6}>
              <Button icon={<ArrowUpOutlined />}></Button>
              <Button icon={<ArrowDownOutlined />}></Button>
            </Col>
          </Footer>
        </Layout>
      </Row>
    </div>
  )
}

export default Start

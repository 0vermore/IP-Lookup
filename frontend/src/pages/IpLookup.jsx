import React from 'react'
import { Row, Col } from 'antd'
import IpForm from '../components/IpForm'
import IpInfo from '../components/IpInfo'
import IpHistory from '../components/IpHistory'

const IpLookupPage = () => {
  return (
    <Row>
      <Col span={8}>
        <IpForm />
        <IpInfo />
      </Col>
      <Col
        span={16}
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        <IpHistory />
      </Col>
    </Row>
  )
}

export default IpLookupPage
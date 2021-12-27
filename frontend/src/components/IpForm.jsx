import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { Form, Input, Button } from 'antd'
import { rules } from '../utilts/rules'

const IpForm = () => {
  const [ip, setIp] = useState('')
  const { createIpInfo } = useActions()

  const onSubmit = () => {
    createIpInfo(ip)
  }

  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 12,
      }}
      initialValues={{
        size: 'large'
      }}
      size='large'
      onFinish={onSubmit}
      autoComplete='off'
    >
      <Form.Item
        label='IP: '
        name='ip'
        rules={[
          rules.ipv4Validation(ip)
        ]}
      >
        <Input
          value={ip}
          onChange={(e) => setIp(e.target.value)} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type='primary'
          htmlType='submit'
        >
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}

export default IpForm
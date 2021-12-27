import React from 'react'
import { Layout, Menu, Row} from 'antd'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const router = useNavigate()

  return (
    <Layout.Header>
      <Row justify='start'>
        <Menu theme='dark' mode='horizontal' selectable={false}>
          <Menu.Item
            onClick={() => router('/')}
            key={1}
          >
            IP Lookup
          </Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  )
}

export default Navbar
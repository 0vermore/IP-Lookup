import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Divider, List, Avatar } from 'antd'
import { getCountryFlag } from '../utilts/imageURL'

const IpHistory = () => {
  const ip_info = useSelector((state) => state.ip_info)

  return (
    <div style={{
      width: '300px'
    }}>
      <Divider orientation="left">History</Divider>
      <div style={{
        maxHeight: '500px',
        overflowY: 'auto'
      }}>
        <List
          itemLayout="horizontal"
          dataSource={ip_info}
          renderItem={item => (
            <Link to={`/history/${item.ip}`}>
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={getCountryFlag(item)} />}
                  title={<span>{item.ip}</span>}
                />
              </List.Item>
            </Link>
          )}
        />
      </div>
    </div >
  )
}

export default IpHistory
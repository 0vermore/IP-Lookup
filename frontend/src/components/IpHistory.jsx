import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Divider, List, Avatar } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { getCountryFlag } from '../utilts/imageURL'
import { useActions } from '../hooks/useActions';

const IpHistory = () => {
  const ip_info = useSelector((state) => state.ip_info)
  const { deleteIpInfo } = useActions()

  const handleDelete = (id) => {
    deleteIpInfo(id)
  }

  return (
    <div style={{
      width: '230px'
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
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              <div style={{ width: '170px' }}>
                <Link to={`/history/${item.ip}`}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={getCountryFlag(item)} />}
                      title={<span>{item.ip}</span>}
                    />
                  </List.Item>
                </Link>
              </div>
              <div style={{ paddingTop: '12px' }}>
                <DeleteOutlined onClick={() => handleDelete(item.id)}/>
              </div>
            </div>
          )}
        />
      </div>
    </div >
  )
}

export default IpHistory
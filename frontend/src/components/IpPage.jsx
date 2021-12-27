import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Col, Row } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { getCountryFlag } from '../utilts/imageURL'

const IpPage = () => {
  const params = useParams();
  const page_ip = params.ip;
  const ip_info = useSelector((state) => state.ip_info.find(item => item.ip === page_ip))
  const navigate = useNavigate();

  return (
    <Row>
      <Col span={6}>
        <Row
        justify='end'
        style={{
          padding: '7px 30px 0 0'
        }}>
          <LeftOutlined onClick={() => navigate('/')} />
        </Row>
      </Col>
      <Col span={18}>
        <h3>Geolocation information</h3>
        {ip_info ?
          <ul>
            <li>
              <h4>IP: </h4>
              <span>{ip_info.ip}</span>
            </li>
            <li>
              <h4>Country Code: </h4>
              <span>{ip_info.country_code}</span>
            </li>
            <li>
              <h4>Flag: </h4>
              <img src={getCountryFlag(ip_info)} alt='flag' />
            </li>
            <li>
              <h4>Country Name: </h4>
              <span>{ip_info.country_name}</span>
            </li>
            <li>
              <h4>Region: </h4>
              <span>{ip_info.region}</span>
            </li>
            <li>
              <h4>City: </h4>
              <span>{ip_info.city}</span>
            </li>
            <li>
              <h4>Postal Code: </h4>
              <span>{ip_info.postal}</span>
            </li>
            <li>
              <h4>Latitude: </h4>
              <span>{ip_info.latitude}</span>
            </li>
            <li>
              <h4>Longitude: </h4>
              <span>{ip_info.longitude}</span>
            </li>
            <li>
              <h4>Timezone: </h4>
              <span>{ip_info.timezone}</span>
            </li>
            <li>
              <h4>Country Calling Code: </h4>
              <span>{ip_info.country_calling_code}</span>
            </li>
            <li>
              <h4>Currency: </h4>
              <span>{ip_info.currency}</span>
            </li>
            <li>
              <h4>Currency Name: </h4>
              <span>{ip_info.currency_name}</span>
            </li>
          </ul>
          : <span>Loading...</span>
        }
      </Col>
    </Row>
  )
}

export default IpPage
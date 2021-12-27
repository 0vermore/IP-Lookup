import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'antd'
import { getCountryFlag } from '../utilts/imageURL'

const IpInfo = () => {
  const ip_info = useSelector((state) => state.ip_info[state.ip_info.length - 1])

  return (
    <Row>
      <Col span={6} />
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

export default IpInfo
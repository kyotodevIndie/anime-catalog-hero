import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';  

export default function Nav () {
  return (
    <nav style={{ marginTop: 20, paddingBottom:50}}>
      <Row>
        <Col span={8} offset={1}><h2>Logo</h2></Col>
        <Col span={6}><Input placeholder="Pesquisar..." prefix={<SearchOutlined />} /></Col>
      </Row>
    </nav>
  )
}

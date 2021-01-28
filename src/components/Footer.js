import React from 'react'

import { Row, Col } from 'antd'

export default function Footer () {
  return (
    <footer>
      <Row justify="center" className="footer">
        <Col>
          <p>
            Designed and Coded with ❤ by <a href="https://github.com/kyotodevIndie">Kyoto</a> 
            | Hosted at <a href="https://vercel.com/">Vercel</a>
          </p>
        </Col>
      </Row>
    </footer>
  )
}

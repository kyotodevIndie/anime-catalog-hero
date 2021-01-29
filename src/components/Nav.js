import React from 'react'

import Link from 'next/link'

import { Row, Col } from 'antd'

export default function Nav () {


  return (
    <nav className='nav'>
      <Row justify='center' align='middle'>
        <Col>
        <Link href='/'>
          <a>
            <img className='logo' src='https://lh3.googleusercontent.com/pw/ACtC-3elfTac962QeHLFVDSP5moJp58vig6ZmthCI78omEjxd5kNpinQC8eKcvbqkGfxynLFGSPPMTvgHAq3JCxcoQ3vOJPHZ-3tZsCKTUukTILzr0tSJW1MnDz1bPLO-R_jeDQUjGkbP3-p0yUAScdL5W0u=w54-h61-no?authuser=0' alt='logo' />
          </a>
        </Link>
        </Col>
      </Row>
    </nav>
  )
}

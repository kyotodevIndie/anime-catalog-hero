import React from 'react'

import {Row, Col} from 'antd'

export default function Title() {
    return (
        <>
        <Row>
            <Col span={6} offset={6} className="left">
                <h1>Todos os animes</h1>
            </Col>
        </Row>
        </>
    )
}

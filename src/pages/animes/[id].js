import React from 'react'
import { Row, Col, Divider } from 'antd'

export default function Anime({ data }) {
    return (
        <div>
            <p style={{ marginBottom: 24 }}>
            {data}
          </p>
          <p>Personal</p>
          <Row>
            <Col span={12}>
              <p title="Full Name" content="Lily" />
            </Col>
            <Col span={12}>
              <p>AntDesign@example.com"</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
            <p>AntDesign@example.com"</p>
            </Col>
          </Row>
          <Divider />
          <p>AntDesign@example.com"</p>
          <Row>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
            <Col span={12}>
            <p>AntDesign@example.com"</p>
            </Col>
          </Row>
          
            id
        </div>
    )
};

    export async function getStaticPaths() {
        const response = await fetch('https://kitsu.io/api/edge/anime?filter[id]=')
        const anime = await response.json()
        const paths = anime.data.map((data) => `${anime.id}`)
        return { paths, fallback: true }
    }
    export async function getStaticProps({ params }) {
        const response = await fetch(`https://kitsu.io/api/edge/anime?filter[id]=${params.id}`)
        const anime = await response.json()
    
        return { props: { anime } }
}

import { Card, Col } from 'antd'

const { Meta } = Card

export default function AnimeCard ({ img, title }) {
  return (
    <Col>
      <Card
          hoverable
          style={{ width: 150, margin: 10 }}
          cover={<img alt="example" src={img} />}
      >
      <Meta title={title} style={{fontSize: 16}}/>
      </Card>
    </Col>
  )
}

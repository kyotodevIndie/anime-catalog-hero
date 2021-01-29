import { Card, Col } from 'antd'

const { Meta } = Card

export default function AnimeCard ({ img, title }) {
  return (
    <Col xs={{ span: 20}}>
      <Card
          hoverable
          className='card'
          cover={<img alt='example' src={img} />}
      >
      <Meta description={title} classname='metadescription' style={{whiteSpace: 'nowrap'}}/>
      </Card>
    </Col>
  )
}

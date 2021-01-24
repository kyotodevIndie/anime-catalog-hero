import React from 'react'
import { Row, Col, Divider } from 'antd'
import Nav from '../../components/Nav'

export default function Anime({ anime }) {
    return (
        <>
          <Nav />            
          <Row >
            <Col span={6} offset={6}>
              <img style={{ width: 200}} src={anime.data[0].attributes.posterImage.medium} alt="Anime Poster" />
            </Col>
            <Col span={12}>
              <p>{anime.data[0].attributes.canonicalTitle}</p>
              <p>{anime.data[0].attributes.startDate}</p>
              <p>{anime.data[0].attributes.averageRating}% de Aprovação da Comunidade</p>
              <p>{anime.data[0].attributes.synopsis}</p>
            </Col>
          </Row>
          
        </>
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

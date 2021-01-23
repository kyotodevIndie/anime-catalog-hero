import { Row } from 'antd'
import React from 'react'
import AnimeCard from '../components/AnimeCard'

function Catalog ({ anime }) {
  return (
    <>
        <Row justify="center" style={{marginLeft: 350, marginRight: 350 }}>
          {console.log(anime)}
            {anime.data.map((data) => (
              <AnimeCard key={data.id} img={data.attributes.posterImage.medium} title={data.attributes.canonicalTitle}/>
            ))}
        </Row>
    </>
  )
};

export async function getStaticProps () {
  const response = await fetch('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0')
  const anime = await response.json()
  return {
    props: {
      anime
    }
  }
}
export default Catalog;
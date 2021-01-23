import Link from 'next/link'
import { Row } from 'antd'
import React from 'react'
import AnimeCard from '../components/AnimeCard'
import FooterPage from '../components/FooterPage'
import DropdownLink from '../components/DropdownLink'


function Index ({ anime }) {
  return (
    <>
    <DropdownLink>
      Popularidade
    </DropdownLink>
    
        <Row justify="center" style={{marginLeft: 350, marginRight: 350 }}>
          {console.log(anime)}
              {anime.data.map((data) => (
                <Link href={`/animes/${data.id}`}>
                  <a>
                    <AnimeCard key={data.id} img={data.attributes.posterImage.medium} title={data.attributes.canonicalTitle}/>
                  </a>
                </Link>
              ))}
        </Row>
        <FooterPage />
        
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
export default Index;
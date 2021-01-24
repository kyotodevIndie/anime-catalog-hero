import Link from 'next/link'
import { Row } from 'antd'
import React from 'react'
import AnimeCard from '../components/AnimeCard'
import FooterPage from '../components/FooterPage'
import DropdownLink from '../components/DropdownLink'
import Nav from '../components/Nav'
import LoadMoreButton from '../components/LoadMoreButton'


function Index ({ anime }) {
  const [loadmore, setloadmore] = React.useState(0)
  
  async function LoadMore(){
    // const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`)
    // const anime = await response.json()
  }

  return (
    <>
    <Nav />

    <DropdownLink>
      Popularidade
    </DropdownLink>

    <Row justify="center" style={{marginLeft: 335, marginRight: 335 }}>
          {anime.data.map((data) => (
            <Link href={`/animes/${data.id}`}>
              <a>
                <AnimeCard key={data.id} img={data.attributes.posterImage.medium} title={data.attributes.canonicalTitle}/>
              </a>
            </Link>
          ))}
    </Row>

    <LoadMoreButton onClick={LoadMore}/>

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
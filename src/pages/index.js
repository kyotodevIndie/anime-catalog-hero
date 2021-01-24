import Link from 'next/link'
import { Row, Button } from 'antd'
import React from 'react'
import AnimeCard from '../components/AnimeCard'
import FooterPage from '../components/FooterPage'
import DropdownLink from '../components/DropdownLink'
import Nav from '../components/Nav'
// import LoadMoreButton from '../components/LoadMoreButton'


function Index ({ apidata }) {
  const [anime, setAnime] = React.useState(apidata.data)
  const [loadmore, setloadmore] = React.useState(20)
  
  async function LoadMore(){
  const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${loadmore}`)
  const apirequest = await response.json()
  setAnime( state => ([
    ...anime,
    ...apirequest.data
    ]))
    
  setloadmore(loadmore + 20)
  }

  return (
    <>
    <Nav />
    {console.log(anime)}
    <DropdownLink>
      Popularidade
    </DropdownLink>

    <Row justify="center" style={{marginLeft: 335, marginRight: 335 }}>
          {anime.map((anime) => (
            <Link href={`/animes/${anime.id}`}>
              <a>
                <AnimeCard key={anime.id} img={anime.attributes.posterImage.medium} title={anime.attributes.canonicalTitle}/>
              </a>
            </Link>
          ))}
    </Row>

    <div
            style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
            }}
        >
            <Button onClick={LoadMore}>Carregar Mais...</Button>
      </div>

    <FooterPage />
        
    </>
  )
};

export async function getStaticProps () {
  const response = await fetch('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0')
  const apidata = await response.json()
  return {
    props: {
      apidata
    }
  }
}
export default Index;
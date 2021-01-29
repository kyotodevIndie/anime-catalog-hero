import React from 'react'

import Link from 'next/link'

import { Row, Button, Popover } from 'antd'

import Title from '../components/Title'
import DropdownLink from '../components/DropdownLink'
import AnimeCard from '../components/AnimeCard'


function Popular ({ apidata }) {
  const [anime, setAnime] = React.useState(apidata.data)
  const [loadmore, setloadmore] = React.useState(20)
  
  async function LoadMore(){
  const response = await fetch(`https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=${loadmore}`)
  const apirequest = await response.json()
  setAnime( state => ([
    ...anime,
    ...apirequest.data
    ]))
    
  setloadmore(loadmore + 20)
  }

  return (
    <>
    <Title />

    <DropdownLink>
    Most Popular Anime
    </DropdownLink>

    <Row justify='center' className='animecard'>
        {anime.map((anime) => (
          <Link key={anime.id} href={`/animes/${anime.id}`}>
            <Popover placement='right' content={<><p className='average'>Average Rating {anime.attributes.averageRating}%</p><p className='agerating'>{anime.attributes.ageRating} - {anime.attributes.ageRatingGuide}</p></>} title={anime.attributes.canonicalTitle} trigger='hover'>
              <a>
                <AnimeCard img={anime.attributes.posterImage.medium} title={anime.attributes.canonicalTitle}/>
              </a>
            </Popover>
          </Link>
        ))}
    </Row>

    <div className='button'>
            <Button onClick={LoadMore}>Carregar Mais...</Button>
      </div>
    </>
  )
};

export async function getStaticProps () {
  const response = await fetch('https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=0')
  const apidata = await response.json()
  return {
    props: {
      apidata
    }
  }
}
export default Popular;
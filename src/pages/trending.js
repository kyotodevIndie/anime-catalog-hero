import React from 'react'

import Link from 'next/link'

import { Row, Popover } from 'antd'

import Title from '../components/Title'
import DropdownLink from '../components/DropdownLink'
import AnimeCard from '../components/AnimeCard'


export default function Trending({ anime }) {
  return (
    <>
    <Title />

    <DropdownLink>
      Trending Tops Animes
    </DropdownLink>

    <Row justify='center' className='animecard'>
        {anime.data.map((data) => (
          <Link key={data.id} href={`/animes/${data.id}`}>
            <Popover placement='right' content={<><p className='average'>Average Rating {data.attributes.averageRating}%</p><p className='agerating'>{data.attributes.ageRating} - {data.attributes.ageRatingGuide}</p></>} title={data.attributes.canonicalTitle} trigger='hover'>
              <a>
                <AnimeCard img={data.attributes.posterImage.medium} title={data.attributes.canonicalTitle}/>
              </a>
            </Popover>
          </Link>
        ))}
    </Row>
    </>
  )
};

export async function getStaticProps () {
  const response = await fetch('https://kitsu.io/api/edge/trending/anime?page[limit]=20&page[offset]=0')
  const anime = await response.json()
  return {
    props: {
        anime
    }
  }
}
import React from 'react'

import { Row, Col } from 'antd'

export default function Anime({apidata}) {
  const giveMeTheYear = apidata.data[0].attributes.startDate.split('-')
    return (
        <>
          <Row >
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 11, offset: 7 }} lg={{ span: 8, offset: 8 }} xl={{ span: 5, offset: 3 }}>
              <img className='poster' src={apidata.data[0].attributes.posterImage.medium} alt='Anime Poster' />
            </Col>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 11, offset: 7 }} lg={{ span: 8, offset: 8   }}  xl={{ span: 9, offset:0 }}>
              <h1>{apidata.data[0].attributes.canonicalTitle} <span className='gray'>{giveMeTheYear[0]}</span></h1>
              <p className='average'>{apidata.data[0].attributes.averageRating}% Average Rating</p>
              <p>Synopsis: {apidata.data[0].attributes.synopsis}</p>
              <div className='videoWrapper'>
                <iframe width='560' height='315'
                src={`https://www.youtube.com/embed/${apidata.data[0].attributes.youtubeVideoId}`}
                frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen>
                </iframe>
              </div>
            </Col>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 11, offset: 7 }} lg={{ span: 8, offset: 8 }}xl={{ span: 5, offset:1 }}>
              <p>{apidata.data[0].attributes.canonicalTitle}</p>
              <p>Start Date: {`${giveMeTheYear[2]}/${giveMeTheYear[1]}/${giveMeTheYear[0]}`}</p>
              <p>  English: {apidata.data[0].attributes.titles.en}</p>
              <p>  Japanese: {apidata.data[0].attributes.titles.ja_jp}</p>
              <p>  Type: {apidata.data[0].attributes.showType}</p>
              <p>  Status: {apidata.data[0].attributes.status}</p>
              <p>  Age Rating: {apidata.data[0].attributes.ageRating} - {apidata.data[0].attributes.ageRatingGuide}</p>
              <p>  Episodes: {apidata.data[0].attributes.episodeCount}</p>
            </Col>
          </Row> 
        </>
    )
};

    export async function getServerSideProps({ params }) {
        const response = await fetch(`https://kitsu.io/api/edge/anime?filter[id]=${params.id}`)
        const apidata = await response.json()
    
        return {
          props: {
            apidata
          },
        }
          
}

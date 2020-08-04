/**
 * @providesModule Features
 * @flow
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Truncate from 'react-truncate'

import { BlogDataContext } from 'blog/blogData'
import { CatalogSection, SectionTitle } from 'home/shared'
import TitleCard from 'home/home/TitleCard'

function Posts () {
  const [{ blogPosts}] = React.useContext(
    BlogDataContext
  )


  return (
    <CatalogSection>
      <Container>
        {blogPosts.map((blogPost, i) => {
          if (blogPost == null) return <Cell key={i} />

          const {
            id,
            title,
            body,
            featured,
            cover_photo_url
          } = blogPost

          let url = `/blog_posts/${id}`;

          return (
            <PostContainer>
              <PostImage>
                <Image src={cover_photo_url}></Image>
              </PostImage>
              <PostText>
                <PostTitle>{title}</PostTitle>
                <PostBody>
                  {truncate(body, url)}
                </PostBody>
              </PostText>
            </PostContainer>
          )
        })}
      </Container>
    </CatalogSection>
  )
}


function truncate(str, url) {
    return <ReadMore str={str} url={url} />
}

function ReadMore ({ str, url }) {
  let result = str.length > 280 ? str.substring(0, 280) : str;
  return (
    <a href={url}><span>{result}...</span><br/>Read More</a>
  )
}




export default Posts


export const PostContainer = styled.div`
  padding: 10px;
  display: flex;
`

export const PostText = styled.div`
  padding-right: 10px;
  border-top: 1px solid white;
  margin-left: 20px;
  min-width: 385px;
  a {
    color: #bbb;
  }
`

export const PostImage = styled.div`
  margin-top: 20px;
`
export const InnerPostImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0px;
  background-color: #ddd;
`

export const PostTitle = styled.div`
  padding: 10px;
  font-weight: bold;
`

export const PostBody = styled.div`
  padding: 10px;
`

const AllPostsLink = styled.a`
  color: #bbb;
  font-size: 16px;
  padding: 10px;

  &:hover {
    color: white;
  }
`

function six (arr) {
  const paddedArr = arr.length < 6 ? [...arr, ...Array(6)] : arr
  return paddedArr.slice(0, 6)
}

export const Container = styled.div`
  background-color: #eae9e4;
  color: black;
  padding: 50px;
  padding-left: 100px;
  padding-right: 100px;
  margin: auto;
  width: 60%;

  a {
    color: black;
    font-size: 16px;
    padding: 10px;

    &:hover {
      color: black;
    }
  }

  a span {
    color: black;
  }
`

const Cell = styled.li`
  background-color: #35536f;
  border-radius: 2pt;
  display: block;
`

const CaseBlock = ({
  kicker,
  title,
  dek,
  coverUrl,
  photoCredit,
  url,
  published,
}) => (
  <Cell>
    <a href={url}>
      <TitleCard
        coverUrl={coverUrl}
        kicker={kicker}
        photoCredit={photoCredit}
        title={title}
      />
    </a>
  </Cell>
)

export const Image = styled.div.attrs({ className: 'pt-dark' })`
  background-image: ${p => css`url(${p.src})`};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  grid-area: image;
  justify-content: flex-end;
  min-height: 100px;
  min-width: 100px;
  position: relative;
`
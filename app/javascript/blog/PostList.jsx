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
        <AllPostsHeader>
          <h1>All Posts</h1>
        </AllPostsHeader>
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
    <a href={url}><span>{result}...</span>
    <div class="read-more-link">Read More</div></a>
  )
}




export default Posts

export const AllPostsHeader = styled.div`
  padding: 10px;
  display: flex;
  margin-bottom: 20px;
  color: #eae9e4;

  h1 {
    font-size: 1.2rem;
    color: #eae9e4;
  }
`

export const PostContainer = styled.div`
  padding: 10px;
  display: flex;
  margin-bottom: 20px;
  background-color: #eae9e4;
  border-radius: 6px;
`

export const PostText = styled.div`
  padding-right: 10px;
  margin-left: 20px;
  min-width: 385px;
  a {
    color: #bbb;
  }
  .read-more-link {
    text-align: right;
    margin-top: 10px;
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

export const Container = styled.div`
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

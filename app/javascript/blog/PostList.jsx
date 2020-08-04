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
              <PostTitle>{title}</PostTitle>
              <PostText>
                <PostBody>
                  {truncate(body, url)}
                </PostBody>
              </PostText>
              <PostImage>
                <Image src={cover_photo_url}></Image>
              </PostImage>
              <PostFooter>
                <a href={url}><div class="read-more-link">Read More</div></a>
              </PostFooter>
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
  let result = str.length > 300 ? str.substring(0, 300) : str;
  return (
    <a href={url}><span>{result}...</span></a>
  )
}




export default Posts

export const AllPostsHeader = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  color: #eae9e4;

  h1 {
    font-size: 1.2rem;
    color: #eae9e4;
  }
`

export const PostContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
  background-color: #eae9e4;
  border-radius: 6px;

  * {
    flex: 1 100%;
  }
`

export const PostText = styled.div`
  padding-right: 10px;
  a {
    color: #bbb;
  }
  .read-more-link {
    text-align: right;
    margin-top: 10px;
  }

  @media all and (min-width: 600px) {
    flex: 3 0px;
    order: 2;
  }
`

export const PostImage = styled.div`

  @media all and (min-width: 600px) {
    flex: 1 0 0;
    order: 1;
  }
`

export const PostTitle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`
export const PostFooter = styled.div`
  padding-right: 10px;
  font-weight: bold;
  text-align: right;
  @media all and (min-width: 600px) {
    order: 4;
  }
`

export const PostBody = styled.div`

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
  justify-content: flex-end;
  min-height: 130px;
  min-width: 130px;
  width: 130px;
  height: 130px;
`

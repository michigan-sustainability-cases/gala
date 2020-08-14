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
      <Grid>
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
                  <PostFooter>
                    <a href={url}><div className="read-more-link">Read More</div></a>
                  </PostFooter>
                </PostBody>
              </PostText>
            </PostContainer>
          )
        })}
        <AllPostsLink href="blog_posts">
          View all posts...
        </AllPostsLink>
      </Grid>
    </CatalogSection>
  )
}


function truncate(str, url) {
  let result = str.length > 280 ? str.substring(0, 280) : str;
  return (
    <a href={url}><span>{result.trim()}...</span></a>
  )

}





export default Posts


export const PostContainer = styled.div`
  padding: 10px;
  display: flex;
  padding-bottom: 0px;
`

export const PostText = styled.div`
  padding-right: 10px;
  border-top: 1px solid white;
  margin-left: 20px;
  min-width: 385px;
  a {
    color: #bbb;
  }

  .rightalign {
    text-align: right;
  }
`

export const PostImage = styled.div`
  margin-top: 20px;
`

export const PostTitle = styled.div`
  padding: 10px;
  font-weight: bold;
`

export const PostBody = styled.div`
  padding: 10px;
`

export const PostFooter = styled.div`
  padding-right: 10px;
  text-align: right;
  line-height: 100%;
  @media all and (min-width: 600px) {
    order: 4;
  }
`

const AllPostsLink = styled.a`
  color: white;
  font-size: 16px;
  padding: 10px;
  text-align: right;

  &:hover {
    color: white;
  }
`

function six (arr) {
  const paddedArr = arr.length < 6 ? [...arr, ...Array(6)] : arr
  return paddedArr.slice(0, 6)
}

export const Grid = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, auto);

  a {
    color: #bbb;
    font-size: 16px;
    padding: 0px;

    &:hover {
      color: white;
    }
  }

  a span {
    color: white;
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

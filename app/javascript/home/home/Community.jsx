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
                  <Truncate lines={3} ellipsis={<span>...
                    <br/><a href={url}>Read more</a></span>}>
                    {body}
                  </Truncate>
                </PostBody>
              </PostText>
            </PostContainer>
          )
        })}
      </Grid>
    </CatalogSection>
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
  background-color: hsl(209, 53%, 76%);
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
  box-shadow: inset -1px 0 0 hsla(0, 0%, 0%, 0.2);
`

/**
 * @providesModule Features
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { CatalogDataContext } from 'home/catalogData'
import { CatalogSection, SectionTitle } from 'home/shared'
import TitleCard from 'home/home/TitleCard'

type Props = { selecting: boolean }

function Featured ({ selecting }: Props) {
  const [{ cases: allCases, enrollments, features }] = React.useContext(
    CatalogDataContext
  )

  let slugs = features
  if (selecting) {
    const enrolledSlugs = enrollments.map(e => e.caseSlug)
    slugs = [...enrolledSlugs, ...slugs]
  }

  const cases = six(slugs).map(slug => allCases[slug])

  return (
    <CatalogSection>
      <PostContainer>
        <PostImage>&nbsp;</PostImage>
        <PostText>
          <PostTitle>Blog Post Title</PostTitle>
          <PostBody>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
          </PostBody>
        </PostText>
      </PostContainer>
      <PostContainer>
        <PostImage>Image Placeholder</PostImage>
        <PostText>
          <PostTitle>Blog Post Title</PostTitle>
          <PostBody>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
          </PostBody>
        </PostText>
      </PostContainer>
      <PostContainer>
        <PostImage></PostImage>
        <PostText>
          <PostTitle>Blog Post Title</PostTitle>
          <PostBody>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
          </PostBody>
        </PostText>
      </PostContainer>
      <PostContainer>
        <PostImage></PostImage>
        <PostText>
          <PostTitle>Blog Post Title</PostTitle>
          <PostBody>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
          </PostBody>
        </PostText>
      </PostContainer>
    </CatalogSection>
  )
}

export default Featured

export const PostContainer = styled.div`
  padding: 10px;
  display: flex;
  border: 1px solid black;
`

export const PostText = styled.div`
  padding: 10px;
`

export const PostImage = styled.div`
  width: 400px;
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
  grid-template-columns: repeat(2, 1fr);
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

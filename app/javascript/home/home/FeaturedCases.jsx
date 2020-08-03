/**
 * @providesModule FeaturedCases
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { CatalogDataContext } from 'home/catalogData'
import { CatalogSection, SectionTitle } from 'home/shared'
import TitleCard from 'home/home/TitleCard'

type Props = { selecting: boolean }

function FeaturedCases ({ selecting }: Props) {
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
      <Grid>
        {cases.map((kase, i) => {
          if (kase == null) return <Cell key={i} />

          const {
            coverUrl,
            kicker,
            links,
            photoCredit,
            slug,
            title,
          } = kase

          return (
            <CaseBlock
              coverUrl={coverUrl}
              key={slug}
              kicker={kicker}
              photoCredit={photoCredit}
              title={title}
              url={links.self}
            />
          )
        })}
        <AllCases url="catalog/home">
          <a href="catalog/home">View All Cases...</a>
        </AllCases>
      </Grid>
    </CatalogSection>
  )
}

export default FeaturedCases

function six (arr) {
  const paddedArr = arr.length < 6 ? [...arr, ...Array(6)] : arr
  return paddedArr.slice(0, 6)
}

const AllCases = styled.div`

  a {
    color: #bbb;
    font-size: 16px;
    padding: 10px;

    &:hover {
      color: white;
    }
  }
`

const AllCasesLink = ({
  url
}) => (
    <a href={url}>
      View All Cases...
    </a>
)


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

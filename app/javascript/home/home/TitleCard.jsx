/**
 * The block containing the cover image, title, kicker, and authors names,
 * shared between the case overview and the catalog features block.
 *
 * @providesModule TitleCard
 * @flow
 */

import * as React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  kicker: string,
  title: string,
  photoCredit: string,
  coverUrl: string,
}

function TitleCard ({ coverUrl, kicker, photoCredit, title }: Props) {
  return (
    <Container>
      <Image src={coverUrl}>
        <PhotoCredit>{photoCredit}</PhotoCredit>
      </Image>

      <Title>
        <Kicker>{kicker}</Kicker>
        <Question>{title}</Question>
      </Title>
    </Container>
  )
}

export default TitleCard

const grid =
  css`
    grid-template-areas: 'image title' 'image authors';
    grid-template-columns: minmax(25%, 240px) auto;
  `

export const Container = styled.div`
  background-color: hsl(209, 83%, 90%);
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 3px 3px 0 0;
  padding: 0px;
`

// $FlowFixMe
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
  min-width: 200px;
  position: relative;
  box-shadow: inset -1px 0 0 hsla(0, 0%, 0%, 0.2);
`

export const PhotoCredit = styled.cite`
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: 11px;
  margin: 3px 5px;
  text-align: end;
  text-shadow: 0 0 10px hsla(0, 0%, 0%, 0.5);
  text-transform: uppercase;

  .pt-editable-text-placeholder > .pt-editable-text-content {
    color: hsla(0, 0%, 100%, 0.7);
  }
`

export const Title = styled.h1`
  grid-area: title;
  margin: 20px;
  padding-bottom: 20px;
`

export const Kicker = styled.span`
  color: hsl(209, 57%, 39%);
  display: block;
  font-family: ${p => p.theme.sansFont};
  font-size: 14px;
  line-height: 15px;
  margin: 0px;
`

export const Question = styled.span`
  color: hsl(209, 52%, 24%);
  display: block;
  font-family: ${p => p.theme.sansFont};
  font-size: 18px;
  line-height: 19px;
`

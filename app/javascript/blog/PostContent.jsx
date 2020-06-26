/**
 * Marketing language visible when the user is not signed in.
 *
 * @providesModule PostContent
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Features from 'home/home/Features'
import Community from 'home/home/Community'



const PostContent = () => (
  <Container>
    <h1>{postData.title}</h1>

    <div>
      {postData.body}
    </div>

  </Container>
)
export default PostContent

// $FlowFixMe
const Container = styled.aside.attrs({ className: 'pt-dark' })`
  color: white;
  display: grid;
  font-family: tenso;
  grid-area: value-proposition;
  grid-gap: 2em 4em;
  grid-template-columns: repeat(2, 1fr);
  hyphens: auto;
  margin-bottom: 1.5em;
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  #getting-started {
    margin-top: 20px;
    grid-column: 1/2;
  }

  #getting-started-blocks {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .pt-callout {
  //  width: 250px;
  }

  h1,
  h2 {
    color: inherit;
    font-family: inherit;
    line-height: 1.2;
  }
  h1 {
    font-size: 170%;
    grid-column: 1 / -1;
  }
  h2 {
    font-size: 130%;
  }

  h1,
  p {
    margin-bottom: 0;
  }

  h4 {
    text-transform: uppercase;
  }

  #home-video-container {
    grid-column: 2;

    @media (max-width: 1000px) {
      grid-column: 1;
    }
  }

  #home-video {
    height: 200px;
    width: 300px;
    background-color: grey;
  }

  #community-content,
  #featured-content {
    background-color: #415e77;
  }

  #findcase-btn,
  #makecase-btn {
    color: #423e59;
    font-weight: bold;
    margin-bottom: 10px;
  }

  #findcase-btn {
    background-color: #feb294;
  }
  #makecase-btn {
    background-color: #a0ebb6;
  }

  .btn-descriptor {
    text-align: left;
  }

  #findcase-block {
    border: 1px solid #feb294;
  }

  #makecase-block {
    border: 1px solid #a0ebb6;
  }

  .content-area {
    padding: 15px;
  }
`

const intents = {
  red: 'pt-intent-danger',
  green: 'pt-intent-success',
  blue: 'pt-intent-primary',
}

const contrastColors = {
  red: 'hsl(20, 93%, 78%)',
  green: 'hsl(145, 76%, 73%)',
  blue: 'hsl(275, 100%, 87%)',
}

const Block = styled.div.attrs(({ theme, icon }) => ({
  className: `pt-callout ${intents[theme]} pt-icon-${icon}`,
}))`
  padding: 1.25em;
  text-align: center;
  margin: 20px;


  &::before {
    top: 17px !important;
  }

  &::before,
  .pt-callout-title {
    color: ${p => contrastColors[p.theme]} !important;
  }
`

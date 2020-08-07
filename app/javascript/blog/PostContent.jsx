/**
 * Marketing language visible when the user is not signed in.
 *
 * @providesModule PostContent
 * @flow
 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Community from 'home/home/Community';



function PostContent () {

  return (
    <Container>
      <h1>{postData.title}</h1>
      <PostImage>
        <Image src={postData.photoUrl}></Image>
      </PostImage>
      <div>
        {postData.body}
      </div>
    </Container>
  )
}



export default PostContent

// $FlowFixMe
const Container = styled.aside.attrs({ className: 'pt-dark' })`
  background-color: #eae9e4;
  padding: 50px;
  padding-left: 100px;
  padding-right: 100px;
  color: black;
  font-family: tenso;
  width: 60%;
  margin: auto;
  margin-top: 50px;

  @media (max-width: 1000px) {
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
  }
  h2 {
    font-size: 130%;
  }

  h1 {
    margin-bottom: 30px;
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

export const PostImage = styled.div`
  margin-top: 20px;
`

export const Image = styled.div.attrs({ className: 'pt-dark' })`
  background-image: ${p => css`url(${p.src})`};
  background-position: center;
  background-size: cover;
  min-height: 100px;
  min-width: 100px;
  width: 200px;
  height: 200px;
  float: right;
  margin-left: 20px;
`

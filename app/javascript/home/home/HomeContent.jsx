/**
 * Marketing language visible when the user is not signed in.
 *
 * @providesModule HomeContent
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import FeaturedCases from 'home/home/FeaturedCases';
import Community from 'home/home/Community';
import YoutubePlayer from 'react-youtube-player';
import GetStarted from './GetStarted';
import SocialFollow from "home/SocialFollow";
import { BlogDataContext } from 'blog/blogData';



function HomeContent() {
  const [{ blogSettings }] = React.useContext(
    BlogDataContext
  )
  let video = blogSettings.find(setting => setting.name === "Home Video ID");
  let videoId = "";
  if (video) {
    videoId = video.value;
  }



  return (
    <Container>
      <div className="flexdiv">
        <h1>
          <FormattedMessage id="catalog.openAccessLearningTools" />
        </h1>
        <SocialFollow />
      </div>
      <div className="flexdiv">
        <GetStarted />
        <div id="home-video-container">
          <div id="home-video">
          <YoutubePlayer
              videoId={videoId}
              playbackState='unstarted'
              configuration={
                  {
                      showinfo: 0,
                      controls: 0
                  }
              }
          />
          </div>
        </div>
      </div>
      <div className="flexdiv">
        <div id="home-community">
          <div id="community-content" className="content-area">
            <h4>Community</h4>
            <Community />
          </div>
        </div>
        <div id="home-features">
          <div id="featured-content" className="content-area">
            <h4>Featured Cases</h4>
            <FeaturedCases />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomeContent



const Container = styled.aside.attrs({ className: 'pt-dark' })`
  color: white;
  display: grid;
  font-family: tenso;
  /* grid-area: value-proposition;
  grid-gap: 2em 4em;
  grid-template-columns: 1fr 1fr */
  display: flex;
  flex-flow: row wrap;
  hyphens: auto;
  margin-bottom: 1.5em;
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 1000px) {
    //grid-template-columns: 1fr;
  }

  .flexdiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 80px;
  }


  #getting-started {
    margin-top: 20px;
    width: 55%;

    #getting-started-blocks {
      width: 100%;
      display: flex;
      justify-content: space-around;

      .gs-block {
        min-width: 215px;
      }
    }
  }

  #home-video-container {

    @media (max-width: 1000px) {

    }
  }

  #home-video {
    height: 300px;
    width: 450px;
    background-color: grey;
  }

  #home-community {
    width: 55%;
  }

  #home-features {
    width: 40%;
  }

  h1,
  h2 {
    color: inherit;
    font-family: inherit;
    line-height: 1.2;
  }
  h1 {
    font-size: 140%;
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
    margin: 0px !important;
    font-size: 16px;
  }

  #community-content,
  #featured-content {
    background-color: #415e77;
    padding-bottom: 0px;
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

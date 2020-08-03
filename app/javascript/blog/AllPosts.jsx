/**
 * @providesModule Home
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'
import { values } from 'ramda'
import ErrorBoundary from 'utility/ErrorBoundary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import { CatalogDataContext } from 'home/catalogData'
import { ReaderDataContext } from 'home/readerData'
import { ReaderDataContextProvider } from 'home/readerData'
import { BlogDataContextProvider } from 'blog/blogData'
import PostList from 'blog/PostList'
import Announcements from 'home/home/Announcements'
import Sidebar from 'home/home/Sidebar'
import { Main, CatalogSection } from 'home/shared'
import { Consumer as ContentItemSelectionContextConsumer } from 'deployment/contentItemSelectionContext'
import { useDocumentTitle } from 'utility/hooks'
import HomeToolbar from 'home/HomeToolbar'
import { MaxWidthContainer } from 'utility/styledComponents'



function AllPosts () {
  const [{ cases, tags, loading: casesLoading }] = React.useContext(
    CatalogDataContext
  )

  const { reader, loading: readerLoading } = React.useContext(ReaderDataContext)

  useDocumentTitle('Gala')

  const basename = window.location.pathname.match(/^(\/\w{2}(-\w{2})?)?\//)[0]

  const {
    id,
    title,
    body,
    featured
  } = postData

  return (
    <ErrorBoundary>
      <Router basename={basename}>
          <ReaderDataContextProvider>
            <BlogDataContextProvider>
                <Container>
                  <HomeToolbar />
                  <MaxWidthContainer>
                    <ConnectedWindow>
                      <ContentItemSelectionContextConsumer>
                        {({ selecting }) => (
                          <>
                            <PostList />
                            <Sidebar />
                          </>
                        )}
                      </ContentItemSelectionContextConsumer>
                    </ConnectedWindow>
                  </MaxWidthContainer>
                </Container>
            </BlogDataContextProvider>
          </ReaderDataContextProvider>
      </Router>
    </ErrorBoundary>
  )
}




  // {blogPosts.map((blogPost, i) => {
  //   if (blogPost == null) return <Cell key={i} />
  //
  //   const {
  //     id,
  //     title,
  //     body,
  //     featured
  //   } = blogPost
  //
  //   let url = `/blog_posts/${id}`;
  //
  //   return (
  //     <PostContainer>
  //       <PostImage><InnerPostImage></InnerPostImage></PostImage>
  //       <PostText>
  //         <PostTitle>{title}</PostTitle>
  //         <PostBody>
  //           <Truncate lines={3} ellipsis={<span>...
  //             <br/><a href={url}>Read more</a></span>}>
  //             {body}
  //           </Truncate>
  //         </PostBody>
  //       </PostText>
  //     </PostContainer>
  //   )
  // })}








export default AllPosts

const Container = styled.div`
  min-height: 100%;
  width: 100vw;
  overflow: hidden;
`

const Window = styled.div`
  display: grid;
  grid-gap: 0 1rem;
  grid-template:
    'sidebar value-proposition' minmax(0, auto)
    'sidebar banner' minmax(0, auto)
    'sidebar main' min-content / 19em calc(100% - 19em - 1em);
  min-height: 100%;
  position: relative;
  padding: 2em 1em;
  margin: 0;

  @media (max-width: 1100px) {
    grid-template:
      'sidebar value-proposition' minmax(0, auto)
      'sidebar banner' minmax(0, auto)
      'sidebar main' min-content / 15em calc(100% - 15em - 1em);
  }

  @media (max-width: 700px) {
    grid-template: 'value-proposition' 'sidebar' 'banner' 'main' auto / 100%;

    & .devise-card {
      margin: auto;
    }
  }
`

const ConnectedWindow = ({ children }) => (
  <ContentItemSelectionContextConsumer>
    {({ selecting }) => {
      const Container = selecting
        ? ContentItemSelectionInProgressWindow
        : Window
      return <Container>{children}</Container>
    }}
  </ContentItemSelectionContextConsumer>
)

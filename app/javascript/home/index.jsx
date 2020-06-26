/**
 * @providesModule HomePage
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'react-intl'

import ErrorBoundary from 'utility/ErrorBoundary'
import {
  Provider as ContentItemSelectionContextProvider,
  Consumer as ContentItemSelectionContextConsumer,
} from 'deployment/contentItemSelectionContext'
import { CatalogDataContextProvider } from 'home/catalogData'
import { ReaderDataContextProvider } from 'home/readerData'
import { BlogDataContextProvider } from 'blog/blogData'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeToolbar from 'home/HomeToolbar'
import { MaxWidthContainer } from 'utility/styledComponents'
import Home from 'home/home'
import Results from 'home/search_results'

import type { IntlShape } from 'react-intl'

export function HomePage ({ intl }: { intl: IntlShape }) {
  const basename = window.location.pathname.match(/^(\/\w{2}(-\w{2})?)?\//)[0]

  return (
    <ErrorBoundary>
      <Router basename={basename}>
        <CatalogDataContextProvider>
          <ReaderDataContextProvider>
            <BlogDataContextProvider>
              <ContentItemSelectionContextProvider>
                <Container>
                  <HomeToolbar />
                  <MaxWidthContainer>
                    <Switch>
                      <Route
                        exact
                        path="/"
                        render={() => (
                          <ConnectedWindow>
                            <Home />
                          </ConnectedWindow>
                        )}
                      />

                      <Route
                        path="/"
                        render={props => (
                          <Window>
                            <Results {...props} />
                          </Window>
                        )}
                      />
                    </Switch>
                  </MaxWidthContainer>
                </Container>
              </ContentItemSelectionContextProvider>
            </BlogDataContextProvider>
          </ReaderDataContextProvider>
        </CatalogDataContextProvider>
      </Router>
    </ErrorBoundary>
  )
}

export default injectIntl(HomePage)

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

const ContentItemSelectionInProgressWindow = styled(Window)`
  grid-template:
    'value-proposition'
    'banner'
    'main' min-content / 100%;

  @media (max-width: 1100px) {
    grid-template:
      'value-proposition'
      'banner'
      'main' min-content / 100%;
  }

  @media (max-width: 700px) {
    grid-template: 'value-proposition' 'banner' 'main' auto / 100%;
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

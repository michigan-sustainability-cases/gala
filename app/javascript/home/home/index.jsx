/**
 * @providesModule Home
 * @flow
 */

import * as React from 'react'
import { values } from 'ramda'

import { CatalogDataContext } from 'home/catalogData'
import { ReaderDataContext } from 'home/readerData'
import ValueProposition from 'home/home/ValueProposition'
import Announcements from 'home/home/Announcements'
import Sidebar from 'home/home/Sidebar'
import Features from 'home/home/Features'
import Categories from 'home/home/Categories'
import Keywords from 'home/home/Keywords'
import { Main, CatalogSection } from 'home/shared'
import Libraries from 'home/home/Libraries'
import { Consumer as ContentItemSelectionContextConsumer } from 'deployment/contentItemSelectionContext'
import { useDocumentTitle } from 'utility/hooks'

// $FlowFixMe
const MapView = React.lazy(() => import('map_view'))

function Home () {
  const [{ cases, tags, loading: casesLoading }] = React.useContext(
    CatalogDataContext
  )

  const { reader, loading: readerLoading } = React.useContext(ReaderDataContext)

  useDocumentTitle('Gala')

  return (
    <ContentItemSelectionContextConsumer>
      {({ selecting }) => (
        <>
          {readerLoading || !!reader || selecting || <ValueProposition />}

          {selecting || <Sidebar />}

          <Announcements />

          <Main>

          </Main>
        </>
      )}
    </ContentItemSelectionContextConsumer>
  )
}

export default Home

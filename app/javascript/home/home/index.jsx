/**
 * @providesModule Home
 * @flow
 */

import * as React from 'react'
import { values } from 'ramda'

import { CatalogDataContext } from 'catalog/catalogData'
import { ReaderDataContext } from 'catalog/readerData'
import HomeContent from 'home/home/HomeContent'
import Announcements from 'home/home/Announcements'
import Sidebar from 'home/home/Sidebar'
import { Consumer as ContentItemSelectionContextConsumer } from 'deployment/contentItemSelectionContext'
import { useDocumentTitle } from 'utility/hooks'


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
          <HomeContent />
          <Sidebar />
          <Announcements />
        </>
      )}
    </ContentItemSelectionContextConsumer>
  )
}

export default Home

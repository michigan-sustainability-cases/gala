/**
 * @providesModule Home
 * @flow
 */

import * as React from 'react'
import { values } from 'ramda'

import ValueProposition from 'catalog/home/ValueProposition'
import Sidebar from 'catalog/home/Sidebar'
import Features from 'catalog/home/Features'
import Categories from 'catalog/home/Categories'
import Keywords from 'catalog/home/Keywords'
import { Main, CatalogSection } from 'catalog/shared'
import Libraries from 'catalog/home/Libraries'
import { Consumer as ContentItemSelectionContextConsumer } from 'deployment/contentItemSelectionContext'
import { useDocumentTitle } from 'utility/hooks'

import type { Case, Enrollment, Library, Reader, Tag } from 'redux/state'
import type { Loading } from 'catalog'

// $FlowFixMe
const MapView = React.lazy(() => import('map_view'))

type Props = {
  loading: Loading,
  reader: ?Reader,
  cases: { [string]: Case },
  enrollments: Enrollment[],
  features: string[],
  tags: Tag[],
  readerIsEditor: boolean,
  onDeleteEnrollment: (
    slug: string,
    options: { displayBetaWarning?: boolean }
  ) => any,
  libraries: Library[],
}

function Home ({
  loading,
  reader,
  onDeleteEnrollment,
  readerIsEditor,
  cases,
  tags,
  libraries,
  enrollments,
  features,
}: Props) {
  // $FlowFixMe
  const enrolledCases = React.useMemo(
    () => enrollments.map(e => cases[e.caseSlug]).filter(x => !!x),
    [cases, enrollments]
  )

  // $FlowFixMe
  const featuredCases = React.useMemo(
    () => features.map(slug => cases[slug]).filter(x => !!x),
    [features, cases]
  )

  useDocumentTitle('Gala')

  return (
    <ContentItemSelectionContextConsumer>
      {({ selecting }) => (
        <>
          {loading.reader || !!reader || <ValueProposition />}

          {selecting || (
            <Sidebar
              loading={loading}
              reader={reader}
              enrolledCases={enrolledCases}
              onDeleteEnrollment={onDeleteEnrollment}
            />
          )}

          <Main>
            <Features
              featuredCases={
                selecting ? [...enrolledCases, ...featuredCases] : featuredCases
              }
            />

            {loading.cases || (
              // $FlowFixMe
              <React.Suspense
                fallback={
                  <CatalogSection className="pt-skeleton">
                    Loading...
                  </CatalogSection>
                }
              >
                <MapView
                  cases={values(cases).filter(x => !!x.publishedAt)}
                  title={{ id: 'cases.index.locations' }}
                  startingViewport={{
                    latitude: 17.770231041567445,
                    longitude: 16.286555860170893,
                    zoom: 1.1606345336768273,
                  }}
                />
              </React.Suspense>
            )}

            {tags && tags.length > 0 && (
              <>
                <Categories tags={tags} />
                <Keywords tags={tags} />
              </>
            )}

            <Libraries libraries={libraries} />
          </Main>
        </>
      )}
    </ContentItemSelectionContextConsumer>
  )
}

export default Home

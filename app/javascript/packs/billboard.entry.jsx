/**
 * @noflow
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { addLocaleData, IntlProvider } from 'react-intl'

import { UnconnectedBillboardTitle } from 'overview/BillboardTitle'
import { UnconnectedCommunityChooser } from 'overview/CommunityChooser'
import MagicLink from 'magic_link'
import { Container } from 'magic_link/shared'

import loadMessages from '../../../config/locales' // eslint-disable-line
const { locale } = (window.i18n: { locale: string })

const container = document.getElementById('billboard-app')

const caseData = JSON.parse(container.getAttribute('data-case-data'))
const groupData = JSON.parse(container.getAttribute('data-group-data'))
const deploymentKey = container.getAttribute('data-deployment-key')

Promise.all([
  import(`react-intl/locale-data/${locale.substring(0, 2)}`),
  loadMessages(locale),
]).then(([localeData, messages]) => {
  addLocaleData(localeData.default)

  if (container != null) {
    ReactDOM.render(
      <IntlProvider locale={locale} messages={messages}>
        <Container>
          <UnconnectedBillboardTitle updateCase={() => {}} {...caseData} />
          <UnconnectedCommunityChooser
            rounded
            disabled
            activeCommunity={groupData}
            communities={[{ groupData }]}
          />
          <MagicLink deploymentKey={deploymentKey} />
        </Container>
      </IntlProvider>,
      container
    )
  }
})

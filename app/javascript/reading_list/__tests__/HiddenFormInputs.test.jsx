/**
 * @flow
 */

import HiddenFormInputs from '../HiddenFormInputs'

import * as React from 'react'
import { render } from 'react-testing-library'

describe('HiddenFormInputs', () => {
  it('has no visible content', () => {
    const items = [{ caseSlug: 'mi-wolves', notes: 'Cool!', param: '' }]

    const form = renderForm(
      <HiddenFormInputs initialItems={[]} items={items} />
    )

    expect(form.firstChild).not.toBeVisible()
    expect(form.firstChild).not.toHaveTextContent(/./)
  })

  it('has the right form values for nested reading list item attributes', () => {
    const items = [
      { caseSlug: 'mi-wolves', notes: 'Cool!', param: '' },
      { caseSlug: 'model-t', notes: 'v important', param: '3' },
    ]

    const form = renderForm(
      <HiddenFormInputs initialItems={[]} items={items} />
    )

    expect(form).toHaveFormValues({
      'reading_list[reading_list_items_attributes][0][case_slug]': 'mi-wolves',
      'reading_list[reading_list_items_attributes][0][notes]': 'Cool!',
      'reading_list[reading_list_items_attributes][0][id]': '',
      'reading_list[reading_list_items_attributes][0][position]': '1',

      'reading_list[reading_list_items_attributes][1][case_slug]': 'model-t',
      'reading_list[reading_list_items_attributes][1][notes]': 'v important',
      'reading_list[reading_list_items_attributes][1][id]': '3',
      'reading_list[reading_list_items_attributes][1][position]': '2',
    })
  })

  it('has the right form values when an existing item was deleted', () => {
    const initialItems = [{ caseSlug: 'mi-wolves', notes: 'Cool!', param: '3' }]
    const items = []
    const form = renderForm(
      <HiddenFormInputs initialItems={initialItems} items={items} />
    )

    expect(form).toHaveFormValues({
      'reading_list[reading_list_items_attributes][0][id]': '3',
      'reading_list[reading_list_items_attributes][0][_destroy]': 'true',
    })
  })

  it('has the right form values when both adding and deleting', () => {
    const initialItems = [{ caseSlug: 'mi-wolves', notes: 'Cool!', param: '3' }]
    const items = [{ caseSlug: 'model-t', notes: 'v important', param: '' }]
    const form = renderForm(
      <HiddenFormInputs initialItems={initialItems} items={items} />
    )

    expect(form).toHaveFormValues({
      'reading_list[reading_list_items_attributes][0][case_slug]': 'model-t',
      'reading_list[reading_list_items_attributes][0][notes]': 'v important',
      'reading_list[reading_list_items_attributes][0][id]': '',
      'reading_list[reading_list_items_attributes][0][position]': '1',

      'reading_list[reading_list_items_attributes][1][id]': '3',
      'reading_list[reading_list_items_attributes][1][_destroy]': 'true',
    })
  })
})

function renderForm (element) {
  const { getByTestId } = render(<form data-testid="form">{element}</form>)
  return getByTestId('form')
}

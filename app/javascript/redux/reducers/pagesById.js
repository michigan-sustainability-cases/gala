/**
 * @providesModule pagesById
 * @flow
 */

import { values, map, without } from 'ramda'
import produce from 'immer'

import { reorder } from 'shared/functions'

import type { PagesState } from 'redux/state'
import type {
  UpdatePageAction,
  AddPageAction,
  RemoveCardAction,
  AddCardAction,
  ReorderCardAction,
  ReplaceCardAction,
} from 'redux/actions'

export default function pagesById (
  state: PagesState = ({ ...window.caseData.pages }: PagesState),
  action: | UpdatePageAction
    | AddPageAction
    | RemoveCardAction
    | AddCardAction
    | ReorderCardAction
    | ReplaceCardAction
): PagesState {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.data,
        },
      }

    case 'ADD_PAGE':
      return {
        ...state,
        [action.data.id]: action.data,
      }

    case 'ADD_CARD': {
      const {
        pageId,
        data: { id },
      } = action
      return produce(state, draft => {
        draft[pageId].cards.push(`${id}`)
      })
    }

    case 'REORDER_CARD': {
      const { id, destination } = action

      return produce(state, draft => {
        const page = values(draft).find(({ cards }) => cards.includes(id))
        if (page == null) return

        page.cards = reorder(page.cards.indexOf(id), destination, page.cards)
      })
    }

    case 'REPLACE_CARD': {
      const {
        cardId,
        newCard: { pageId, position },
      } = action

      return produce(state, draft => {
        const page = draft[pageId]
        page.cards = reorder(
          page.cards.indexOf(cardId),
          position - 1,
          page.cards
        )
      })
    }

    case 'REMOVE_CARD': {
      const { id } = action
      return map(page => ({ ...page, cards: without([id], page.cards) }), state)
    }

    default:
      return state
  }
}

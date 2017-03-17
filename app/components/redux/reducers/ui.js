import {
  HIGHLIGHT_EDGENOTE,
  ACTIVATE_EDGENOTE,
  OPEN_CITATION,
  OPEN_COMMENT_THREADS,
  SELECT_COMMENT_THREAD,
  HOVER_COMMENT_THREAD,
  ACCEPT_SELECTION,
  ADD_COMMENT_THREAD,
  CHANGE_COMMENT_IN_PROGRESS,
  REGISTER_TOASTER,
  DISPLAY_TOAST,
} from '../actions.js'

export default function ui(state, action) {
  if (typeof state === 'undefined') {
    return {
      openedCitation: {},
      acceptingSelection: false,
      commentThreadsOpenForCard: null,
      selectedCommentThread: null,
      hoveredCommentThread: null,
      commentInProgress: {},
      toaster: null,
    }
  }

  switch (action.type) {
    case HIGHLIGHT_EDGENOTE:
      return { ...state, highlightedEdgenote: action.slug }

    case ACTIVATE_EDGENOTE: return { ...state, activeEdgenote: action.slug }

    case OPEN_CITATION: return { ...state, openedCitation: action.data }

    case ACCEPT_SELECTION: return { ...state, acceptingSelection: true }
    case ADD_COMMENT_THREAD: return { ...state, acceptingSelection: false }

    case OPEN_COMMENT_THREADS:
      return {
        ...state,
        commentThreadsOpenForCard: action.cardId,
        acceptingSelection: false,
      }

    case SELECT_COMMENT_THREAD:
      return { ...state, selectedCommentThread: action.id }

    case HOVER_COMMENT_THREAD:
      return { ...state, hoveredCommentThread: action.id }

    case CHANGE_COMMENT_IN_PROGRESS:
      return {
        ...state,
        commentInProgress: {
          ...state.commentInProgress,
          [action.threadId]: action.content,
        },
      }

    case REGISTER_TOASTER:
      return {
        ...state,
        toaster: action.toaster,
      }

    case DISPLAY_TOAST:
      state.toaster.show(action.options)
      return state

    default: return state
  }
}
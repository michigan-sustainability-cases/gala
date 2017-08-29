/**
 * @flow
 */

import type { EditorState } from 'draft-js'

// Redux state
export type { State } from 'redux/reducers'

export type ActivitiesState = {
  [activityId: string]: Activity,
}

export type CardsState = {
  [cardSlug: string]: Card,
}

export type CaseDataState = {
  audience: string,
  baseCoverUrl: string,
  caseElements: CaseElement[],
  commentable: boolean,
  coverUrl: string,
  dek: string,
  kicker: string,
  learningObjectives: string[],
  otherAvailableLocales: string[],
  pageIds: number[],
  photoCredit: string,
  published: boolean,
  reader: ?Reader,
  slug: string,
  smallCoverUrl: string,
  summary: string,
  title: string,
} & Byline

export type CommentThreadsState = {
  [commentThreadId: string]: CommentThread,
}

export type CommentsState = {
  [commentId: string]: Comment,
}

export type EdgenotesState = {
  [edgenoteSlug: string]: Edgenote,
}

export type EditState = {
  changed: boolean,
  inProgress: boolean,
  possible: boolean,
  unsavedChanges: {
    [modelSlashId: string]: boolean,
  },
}

export type PagesState = {
  [pageId: string]: Page,
}

export type PodcastsState = {
  [podcastId: string]: Podcast,
}

export type QuizNecessity<Pre: boolean, Post: boolean> = {
  needsPretest: Pre,
  needsPosttest: Post,
}

export type QuizState =
  | QuizNecessity<false, false>
  | (QuizNecessity<boolean, boolean> & {
      id: string,
      questions: Question[],
    })

export type StatisticsState =
  | false
  | {
      [trackableUri: string]: Statistics,
    }

export type UIState = {
  acceptingSelection: boolean,
  activeEdgenote: ?string,
  commentInProgress: {
    [commentThreadId: string]: string,
  },
  highlightedEdgenote: ?string,
  hoveredCommentThread: ?string,
  openedCitation: | {| key: null |}
    | {|
        key: string,
        labelRef: HTMLElement,
      |},
  toaster: any,
}

// Model Objects
export type Element = Activity | Page | Podcast

export type Activity = {
  cardId: number,
  caseElement: CaseElement,
  iconSlug: string,
  id: string,
  pdfUrl: string,
  position: number,
  title: string,
  url: string,
}

export type Byline = {
  authors: string[],
  authorsString: string,
  translators: string[],
  translatorsString: string,
}

export type Card = {
  commentThreads: ?(CommentThread[]),
  content: string,
  editorState: ?EditorState,
  id: string,
  position: number,
  rawContent: string,
  solid: boolean,
}

export type CaseElement = {
  caseId: string,
  elementId: string,
  elementStore: CaseElementStore,
  elementType: string,
  id: string,
  position: number,
}

export type CaseElementStore = 'pagesById' | 'podcastsById' | 'activitiesById'

export type Comment = {
  commentThreadId: number,
  content: string,
  id: string,
  reader: {
    id: string,
    initials: string,
    name: string,
  },
  timestamp: string,
}

export type CommentThread = {
  blockIndex: number,
  cardId: string,
  commentIds: number[],
  commentsCount: number,
  id: string,
  length: number,
  originalHighlightText: string,
  readerId: number,
  start: number,
}

export type Edgenote = {
  attribution: string,
  audioUrl: string,
  averageTime: string,
  callToAction: string,
  caption: string,
  content: string,
  embedCode: string,
  format: string,
  imageUrl: string,
  instructions: string,
  pdfUrl: string,
  photoCredit: string,
  pullQuote: string,
  slug: string,
  style: 'v1' | 'v2',
  thumbnailUrl: string,
  uniques: number,
  views: number,
  websiteUrl: string,
  youtubeSlug: string,
}

export type Community = {
  id: string | null,
  name: string,
  active: boolean,
  global: boolean,
}

export type ReplyToThreadNotification = {
  notifier: {
    // instance of Reader
    id: string,
    name: string,
    initials: string,
  },
  community: {
    id: string,
    name: string,
  },
  case: {
    slug: string,
    kicker: string,
  },
  element: {
    position: number,
  },
  cardId: string,
  commentThreadId: number,
}

export type Notification = {
  id: string,
  message: string,
} & ReplyToThreadNotification

export type Page = {
  cards: string[],
  caseElement: CaseElement,
  iconSlug: void,
  id: string,
  position: number,
  title: string,
  url: string,
}

export type Podcast = {
  artworkUrl: string,
  audioUrl: string,
  averageTime: string,
  cardId: number,
  caseElement: CaseElement,
  creditsList: PodcastCreditList,
  iconSlug: string,
  id: string,
  photoCredit: string,
  position: number,
  title: string,
  uniques: number,
  url: string,
  views: number,
}

export type PodcastCreditList = {
  guests: PodcastGuest[],
  hosts: string[],
  hosts_string: string,
}

export type PodcastGuest = { name: string, title: string }

export type Question = {
  id: string,
  content: string,
  options: string[],
}

export type Reader = {
  activeCommunity: ?Community,
  canUpdateCase: boolean,
  email: string,
  enrollment: ?{
    status: 'student' | 'instructor' | 'treatment',
  },
  id: string,
  initials: string,
  name: string,
  roles: {
    editor: boolean,
    invisible: boolean,
  },
}

export type Statistics = ({ loaded: true } & StatisticsData) | { loaded: false }

export type StatisticsData = {
  averageTime: string,
  uniques: number,
  views: number,
  updatedAt: number,
}

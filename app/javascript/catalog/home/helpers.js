/* @flow */

import * as R from 'ramda'

import type { Tag } from 'redux/state'

const sortGroup = (t: Tag) => t.displayName[0]

export const groupKeywords = R.pipe(
  R.sortWith([R.ascend(R.prop('displayName'))]),
  R.filter(tag => !tag.category),
  R.groupWith((a, b) => sortGroup(a) === sortGroup(b))
)

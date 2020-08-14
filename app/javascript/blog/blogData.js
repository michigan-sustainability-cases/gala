/**
 * @flow
 */

import * as React from 'react'
import { useImmer } from 'use-immer'

import { Orchard, OrchardError } from 'shared/orchard'
import { normalize } from 'shared/functions'

import type {
  BlogPost
} from 'redux/state'

export type BlogData = {
  blogPosts: BlogPost[],
  blogSettings: BlogSetting[]
}

function useBlogData (): [BlogData, ((BlogData) => void) => void] {
  const [data, update] = useImmer(getDefaultBlogData())

  React.useEffect(() => {
    Orchard.harvest('blog_posts')
      .then(blogPosts =>
        update(draft => {
          draft.blogPosts = blogPosts
        })
      )
      .catch(e => {
        throw e
      })
    }, [])

  return [data]
}

export const BlogDataContext = React.createContext<
  [BlogData, ((BlogData) => void) => void]
>([getDefaultBlogData(), () => {}])

function getDefaultBlogData () {
  return {
    blogPosts: []
  }
}

export function BlogDataContextProvider ({
  children,
}: {
  children: React.Node,
}) {
  const [blogData, updateBlogData] = useBlogData()

  return (
    <BlogDataContext.Provider value={[blogData, updateBlogData]}>
      {children}
    </BlogDataContext.Provider>
  )
}

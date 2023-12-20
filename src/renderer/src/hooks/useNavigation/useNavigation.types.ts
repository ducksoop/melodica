import type { LibraryProps } from '../../pages/library/Library.types'
import type { PlaylistProps } from '../..//pages/playlist/Playlist.types'

export type PageToProps = {
  library: LibraryProps
  playlist: PlaylistProps
}

export type UseNavigationActions = NavigateToAction | UpdatePageAction

export type NavigateToAction = {
  type: 'navigateTo'
} & (NavigateToLibrary | NavigateToPlaylist)

type NavigateToLibrary = {
  pageId: 'library'
} & LibraryProps

type NavigateToPlaylist = {
  pageId: 'playlist'
} & PlaylistProps

export type UpdatePageAction = {
  type: 'updatePage'
}

export type UseNavigationState = {
  currentPageId: keyof PageToProps
}

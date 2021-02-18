export const WATCH_LATER_ACTION_TYPES = {
  TOGGLE_WATCH_LATER: 'SET_WATCH_LATER',
  CLEAR_WATCH_LATER: 'CLEAR_WATCH_LATER'
}

export function toggleWatchLater(movie) {
  return { type: WATCH_LATER_ACTION_TYPES.TOGGLE_WATCH_LATER, movie }
}

export function clear() {
  return { type: WATCH_LATER_ACTION_TYPES.CLEAR_WATCH_LATER }
}

export const lyricGetters = {
  allLyrics: state => {
    return state.lyrics.reverse();
  },
  lyricById: (state, getters) => id => {
    return getters.allLyrics.find(l => l.id === id);
  }
};

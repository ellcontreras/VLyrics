import Repository from "./Repository";

const resource = "lyric";
export default {
  get() {
    return Repository.get(`${resource}`);
  },
  getLyric(lyricId) {
    return Repository.get(`${resource}/${lyricId}`);
  },
  createLyric(lyric) {
    return Repository.post(`${resource}`, lyric);
  },
  updateLyric(lyric) {
    return Repository.put(`${resource}/${lyric.id}`, lyric);
  },
  deleteLyric(lyric) {
    return Repository.delete(`${resource}/${lyric.id}`);
  },
  search(query) {
    return Repository.get(`${resource}/search/${query}`);
  }
};

import {
  ADD_LYRIC,
  ADD_LYRIC_SUCCESS,
  ALL_LYRICS,
  ALL_LYRICS_SUCCESS,
  DELETE_LYRIC,
  DELETE_LYRIC_SUCCESS
} from "./mutation-types";
import router from "../router";

export const lyricMutations = {
  [ADD_LYRIC]: state => {
    state.showLoading = true;
  },
  [ADD_LYRIC_SUCCESS]: (state, payload) => {
    state.showLoading = false;

    state.lyrics.push(payload);

    router.push(`/lyric/${payload.id}`);
  },
  [ALL_LYRICS]: state => {
    state.showLoading = true;
  },
  [ALL_LYRICS_SUCCESS]: (state, payload) => {
    state.showLoading = false;

    state.lyrics = payload;
  },
  [DELETE_LYRIC]: state => {
    state.showLoading = true;
  },
  [DELETE_LYRIC_SUCCESS]: (state, payload) => {
    state.showLoading = false;

    const index = state.lyrics.findIndex(c => c.id === payload);
    state.lyrics.splice(index, 1);

    router.push("/");
  }
};

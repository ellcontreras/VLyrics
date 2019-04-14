<template>
  <div>
    <h1 class="text-center">{{ lyric.songName }}</h1>
    <p class="text-center mt-6">{{ lyric.songLyric }}</p>
    <button class="bg-red-light text-white hover:bg-red p-2 rounded" @click="deleteLyric">Delete</button>
  </div>
</template>

<script>
import { RepositoryFactory } from "../repository/RepositoryFactory";
const LyricsRepository = RepositoryFactory.get("lyrics");

export default {
  name: "LyricView",
  computed: {
    lyric() {
      return this.$store.getters.lyricById(this.$route.params.id);
    }
  },
  methods: {
    async deleteLyric() {
      this.$store.dispatch("deleteLyric", this.$route.params.id);
    }
  }
};
</script>


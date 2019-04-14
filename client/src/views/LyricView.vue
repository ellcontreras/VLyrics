<template>
  <div>
    <h1 class="text-center">{{ lyric.songName }}</h1>
    <p class="text-center mt-6">{{ lyric.songLyric }}</p>
  </div>
</template>

<script>
export default {
  name: "LyricView",
  computed: {
    lyric() {
      return this.$store.getters.lyricById(this.$route.params.id);
    }
  }
};
</script>


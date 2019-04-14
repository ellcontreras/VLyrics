<template>
  <div
    class="max-w rounded overflow-hidden shadow-lg mb-5 cursor-pointer"
    @click="$router.push(`/lyric/${lyric.id}`)"
  >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ lyric.songName }}</div>
      <p>{{ lyric.songLyric }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayLyricCard",
  props: {
    lyric: {}
  }
};
</script>

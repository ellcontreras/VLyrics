<template>
  <div>
    <display-lyric-card v-for="lyric in allLyrics" :key="lyric.id" :lyric="lyric"/>
  </div>
</template>

<script>
import DisplayLyricCard from "@/components/DisplayLyricCard";
import { mapGetters } from "vuex";

export default {
  name: "DisplayLyricsAll",
  components: {
    DisplayLyricCard
  },
  computed: mapGetters(["allLyrics"])
};
</script>


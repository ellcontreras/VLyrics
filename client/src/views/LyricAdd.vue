<template>
  <div>
    <h1 class="font-bold text-5x1 text-center mb-3">Agregar una letra</h1>

    <form-lyric-add v-on:clickAddLyric="addLyric"/>
  </div>
</template>

<script>
import FormLyricAdd from "@/components/FormLyricAdd";

export default {
  name: "LyricAdd",
  components: {
    FormLyricAdd
  },
  methods: {
    addLyric(lyric) {
      this.$store.dispatch("addLyric", {
        name: lyric.songName,
        lyric: lyric.songLyric
      });
    }
  }
};
</script>


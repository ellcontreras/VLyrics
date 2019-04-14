<template>
  <div>
    <search-bar text="Todas las letras"/>
    <display-lyrics-all/>
  </div>
</template>

<script>
import DisplayLyricsAll from "@/components/DisplayLyricsAll";
import SearchBar from "@/components/SearchBar";

export default {
  name: "home",
  components: {
    DisplayLyricsAll,
    SearchBar
  }
};
</script>

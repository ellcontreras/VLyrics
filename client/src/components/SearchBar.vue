<template>
  <div class="max-w shadow-lg p-10 mb-10">
    <h1 class="font-bold text-5x1 text-center">{{ title }}</h1>
    <label class="block text-grey-darker text-sm font-bold mb-2">Busca una letra</label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      v-model="query"
      @change="makeSearch"
      placeholder="Busqueda..."
    >
    <div v-show="showItems" class="shadow-lg z-40">
      <div
        v-for="item in items"
        :key="item.id"
        class="cursor-pointer hover:bg-indigo-lighter p-4 mb-1"
        @click="$router.push(`/lyric/${item.id}`)"
      >{{ item.songName }}</div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "../repository/RepositoryFactory";
const LyricsRepository = RepositoryFactory.get("lyrics");

export default {
  name: "SearchBar",
  props: {
    title: {
      default: "Busca tu letra"
    }
  },
  data: () => ({
    query: "",
    items: []
  }),
  methods: {
    async makeSearch() {
      const { data, status } = await LyricsRepository.search(this.query);
      if (data) {
        this.items = data;
      }

      if (status !== 200) {
        this.showItems = false;
      }
    }
  },
  computed: {
    showItems() {
      return this.items.length > 0;
    }
  }
};
</script>


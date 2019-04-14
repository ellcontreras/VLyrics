<template>
  <form class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2">Nombde de la cación</label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        v-model="lyric.songName"
        type="text"
        placeholder="Las mañanitas..."
      >
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Letra</label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
        v-model="lyric.songLyric"
      ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="$emit('clickAddLyric', lyric)"
      >Subir letra!</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormLyricAdd",
  data: () => ({
    lyric: {}
  })
};
</script>


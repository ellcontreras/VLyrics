<template>
  <div class="max-w shadow-lg p-10 mb-10">
    <h1 class="font-bold text-5x1 text-center">{{ title }}</h1>
    <label class="block text-grey-darker text-sm font-bold mb-2">Busca una letra</label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Busqueda..."
    >
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    title: {
      default: "Busca tu letra"
    }
  }
};
</script>


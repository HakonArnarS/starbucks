<template>
  <li>
    <q-item to="drinks/hot-coffees">
      <img :src="drink.img" :alt="drink.imgAlt" />
      <h4>{{ drink.name }}</h4>
    </q-item>
  </li>
</template>

<script>
export default {
  props: ["drink", "index"]
};
</script>

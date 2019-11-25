<template>
  <li>
    <a href="#">
      <img :src="food.img" :alt="food.imgAlt" />
      <h4>{{ food.name }}</h4>
    </a>
  </li>
</template>

<script>
export default {
  props: ["food", "index"]
};
</script>

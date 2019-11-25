<template>
  <li>
    <a href="#">
      <img :src="item.img" :alt="item.imgAlt" />
      <h4>{{ item.name }}</h4>
    </a>
  </li>
</template>

<script>
export default {
  props: ["item", "index"]
};
</script>

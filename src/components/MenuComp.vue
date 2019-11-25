<!-- Er hægt að setja alla Drink, Food, AtHome componentana inní þennan 
og ná bara í þenna á Menu.vue? 

<template>
  <div class="menuContainer">
    <h2>Menu</h2>
    <section class="category">
      <h3>Drinks</h3>
      <div class="catsContainer">
        <ul class="catsUL">
          <li v-for="(drink, index) in drinks">
            <a>
              <img src="{{ drink.img }}" alt="{{ drink.imgAlt }}" />
              <h4>{{ drink.name }}</h4>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drinks: [
        {
          name: "Hot Coffees",
          img:
            "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288",
          imgAlt: "Hot cup of coffee"
        },
        {
          name: "Hot Teas",
          img:
            "https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288",
          imgAlt: "Hot cup of tea"
        }
      ],
      props: ["cats", "index"]
    };
  }
};
</script>
-->

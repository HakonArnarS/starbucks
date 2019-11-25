<template>
  <q-page>
    <div class="menuContainer">
      <h2>Menu</h2>
      <section class="category">
        <h3>Drinks</h3>
        <div class="catsContainer">
          <ul class="catsUL">
            <drink
              v-for="(drink, index) in drinks"
              :drink="drink"
              :index="index"
              :key="drink.id"
            ></drink>
          </ul>
        </div>
      </section>

      <section class="category">
        <h3>Food</h3>
        <div class="catsContainer">
          <ul class="catsUL">
            <food
              v-for="(food, index) in foods"
              :food="food"
              :index="index"
              :key="food.id"
            ></food>
          </ul>
        </div>
      </section>

      <section class="category">
        <h3>Shopping Bags</h3>
        <div class="catsContainer">
          <ul class="catsUL">
            <li>
              <a>
                <img
                  src="https://globalassets.starbucks.com/assets/3fff555b53cc41aab7627b9e06c29a81.jpg"
                  alt="coffee image"
                />
                <h4>Shopping Bags</h4>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import Drink from "../components/Drink.vue";
import Food from "../components/Food.vue";

export default {
  data() {
    return {
      drinks: [
        {
          id: 1,
          name: "Hot Coffees",
          img:
            "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288",
          imgAlt: "Hot cup of coffee"
        },
        {
          id: 2,
          name: "Hot Teas",
          img:
            "https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288",
          imgAlt: "Hot cup of tea"
        },
        {
          id: 3,
          name: "Hot Drinks",
          img:
            "https://globalassets.starbucks.com/assets/99b509a20b78419d965135d75a8cbbdb.jpg?impolicy=1by1_tight_288",
          imgAlt: "Hot cup of chocolate"
        },
        {
          id: 4,
          name: "Frappuccino® Blended Beverages",
          img:
            "https://globalassets.starbucks.com/assets/eacda97022ca470db92afd9870e948b3.jpg?impolicy=1by1_tight_288",
          imgAlt: "Hot cup of Frappuccino"
        },
        {
          id: 5,
          name: "Cold Coffees",
          img:
            "https://globalassets.starbucks.com/assets/a5f9bfb228964158b4607691c64a3efd.jpg?impolicy=1by1_tight_288",
          imgAlt: "Cold cup of coffee"
        },
        {
          id: 6,
          name: "Iced Teas",
          img:
            "https://globalassets.starbucks.com/assets/7b51b01b4a394a829ff9df4ef9f3be3c.jpg?impolicy=1by1_tight_288",
          imgAlt: "Glass of Iced tea"
        },
        {
          id: 7,
          name: "Cold Drinks",
          img:
            "https://globalassets.starbucks.com/assets/3986b6d37c2746feb712406698fedbd5.jpg?impolicy=1by1_tight_288",
          imgAlt: "Glass of cold drink"
        }
      ],

      foods: [
        {
          id: 1,
          name: "Hot Breakfast",
          img:
            "https://globalassets.starbucks.com/assets/ff0c6ab3635642f1a6f2889fe565afde.jpg?impolicy=1by1_tight_288",
          imgAlt: "Sandwich"
        },
        {
          id: 2,
          name: "Bakery",
          img:
            "https://globalassets.starbucks.com/assets/d219588974da42e1a00decf48687974f.jpg?impolicy=1by1_tight_288",
          imgAlt: "Beagle"
        },
        {
          id: 3,
          name: "Lunch",
          img:
            "https://globalassets.starbucks.com/assets/4702bf2af8a3462c92b559b1126be20f.jpg?impolicy=1by1_tight_288",
          imgAlt: "Wraps"
        },
        {
          id: 4,
          name: "Snacks & Sweets",
          img:
            "https://globalassets.starbucks.com/assets/e187250f2cc24ab0a3d826411b96457e.jpg?impolicy=1by1_tight_288",
          imgAlt: "Cookies"
        },
        {
          id: 5,
          name: "Yogurt & Custard",
          img:
            "https://globalassets.starbucks.com/assets/c46c708249384da89823b47e384f716e.jpg?impolicy=1by1_tight_288",
          imgAlt: "Yogurt"
        }
      ]
    };
  },
  components: {
    drink: Drink,
    food: Food
  },

  name: "PageTest"
};
</script>

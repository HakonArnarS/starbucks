<template>
  <q-page>
    <nav class="subNav">
      <ul class="subnav row items-center">
        <li class="listItem">
          <a href="#">All products</a>
        </li>
        <li class="listItem">
          <a href="#">Previous</a>
        </li>
        <li class="listItem">
          <a href="#">Favorites</a>
        </li>
      </ul>
    </nav>

    <div class="menuContainer">
      <q-breadcrumbs class="q-pb-sm">
        <q-breadcrumbs-el to="/menu" label="Menu" active-color="color-burger" />
        <q-breadcrumbs-el label="Hot Coffees" disable />
      </q-breadcrumbs>
      <h2>Hot Coffees</h2>
      <section class="category">
        <h3>Americanos</h3>

        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <q-item to="/product" class="column items-center">
              <img
                src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Caffè Americano</h6>
            </q-item>
          </li>
          <li class="listItem">
            <q-item to="/product" class="column items-center">
              <img
                src="https://globalassets.starbucks.com/assets/77da0026684947e0bfa8f5d6befc26fc.jpg"
                alt="hot cup of coffee"
              />
              <h6>Starbucks® Blonde Caffè Americano</h6>
            </q-item>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Brewed Coffees</h3>
        <ul class="coffeesContainer row">
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/041502ea2476446ba1118a7fe18d4dcb.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Blonde Roast</h6>
            </a>
          </li>
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/18cbac3909e444f0a43f60ede094b46c.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Caffè Misto</h6>
            </a>
          </li>
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/30c60a8357a74f83be4d2161e5e7c7c5.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Featured Dark Roast</h6>
            </a>
          </li>
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/07df3b1a16264a36ac4a719723ff1a61.jpg"
                alt="hot cup of coffee"
              />
              <h6>Pike Place® Roast</h6>
            </a>
          </li>
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/0a2e956074304d13a4ce6dd84e4a69d7.jpg"
                alt="hot cup of coffee"
              />
              <h6>Decaf Pike Place® Roast</h6>
            </a>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Cappuccinos</h3>
        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Cappuccino</h6>
            </a>
          </li>
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Starbucks® Blonde Cappuccino</h6>
            </a>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Espresso Shots</h3>
        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Espresso</h6>
            </a>
          </li>
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Espresso Con Panna</h6>
            </a>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Flat Whites</h3>
        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_tight_288"
                alt="hot cup of coffee"
              />
              <h6>Flat White</h6>
            </a>
          </li>
          <li class="listItem">
            <a href="#">
              <img
                src="https://globalassets.starbucks.com/assets/b66a42e2f2c14e6baee96b0a02ac2328.jpg"
                alt="hot cup of coffee"
              />
              <h6>Starbucks® Blonde Flat White</h6>
            </a>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Lattes</h3>
        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <a href="#">
              <img
                src="~assets/sad.svg"
                style="border-radius: inherit;"
                alt="sad face"
              />

              <h6>
                Sorry, nothing here...
                <strong>404</strong>
              </h6>
            </a>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Macchiatos</h3>
        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <a href="#">
              <img
                src="~assets/sad.svg"
                style="border-radius: inherit;"
                alt="sad face"
              />
              <h6>
                Sorry, nothing here...
                <strong>404</strong>
              </h6>
            </a>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Mochas</h3>
        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <a href="#">
              <img
                src="~assets/sad.svg"
                style="border-radius: inherit;"
                alt="sad face"
              />
              <h6>
                Sorry, nothing here...
                <strong>404</strong>
              </h6>
            </a>
          </li>
        </ul>
      </section>

      <section class="category">
        <h3>Clover® Brewed Coffees</h3>
        <ul class="coffeesContainer row justify-center">
          <li class="listItem">
            <a href="#">
              <img
                src="~assets/sad.svg"
                style="border-radius: inherit;"
                alt="sad face"
              />
              <h6>
                Sorry, nothing here...
                <strong>404</strong>
              </h6>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

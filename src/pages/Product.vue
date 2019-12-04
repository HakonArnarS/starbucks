<template>
  <q-page>
    <div class="contentContainer">
      <div class="infoGreeting bg-white greeting column">
        <div class="infoText">
          <q-breadcrumbs>
            <q-breadcrumbs-el
              to="/menu"
              label="Menu"
              active-color="color-burger"
            />
            <q-breadcrumbs-el label="Hot Coffees" />
            <q-breadcrumbs-el label="Caffè Americano" disable />
          </q-breadcrumbs>
          <h2 class="q-pt-lg">Caffè Americano</h2>
          <p class="q-py-lg">{{ info }}</p>
          <q-btn
            flat
            rounded
            icon="room"
            color="grey"
            no-caps
            label="Select a store to view availability"
            class="q-pb-lg"
          />
        </div>
        <div class="row self-start infoTextExtra">
          <a href="#">Privact Statement</a>
          |
          <a href="#">Terms of Use</a>
        </div>
      </div>
      <div class="productContainer column">
        <div class="customizations">
          <img
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"
            alt="hot cup of coffee"
          />
          <h4>Customizations</h4>
          <div class="smInfoSection bg-white greeting column">
            <div class="infoText">
              <q-breadcrumbs>
                <q-breadcrumbs-el
                  to="/menu"
                  label="Menu"
                  active-color="color-burger"
                />
                <q-breadcrumbs-el
                  to="/drinks/hot-coffees"
                  label="Hot Coffees"
                  active-color="color-burger"
                />
                <q-breadcrumbs-el label="Caffè Americano" disable />
              </q-breadcrumbs>
              <h2 class="q-pt-lg">Caffè Americano</h2>
              <p class="q-py-lg">{{ info }}</p>
              <q-btn
                flat
                rounded
                icon="room"
                color="grey"
                no-caps
                label="Select a store to view availability"
                class="q-pb-lg"
              />
            </div>
            <div class="row self-start infoTextExtra">
              <a href="#">Privact Statement</a>
              |
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
        <div class="nutriInfo">
          <h4>Nutrition Information</h4>
          <p>
            Nutrition information is calculated based on our standard recipes.
            Only changing drink size will update this information. Other
            customizations will not.
          </p>
        </div>
      </div>
    </div>
    <q-btn
      to="/menu"
      unelevated
      rounded
      no-caps
      color="primary"
      label="Add to order"
      size="xl"
      class="orderBtn"
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      info:
        "Espresso shots are topped with hot water to produce a light layer of crema. The result is this wonderfully rich cup with depth and nuance. Pro tip: for additional caffeine, ask your barista to try this with an extra shot (75 mg caffeine per shot).."
    };
  }
};
</script>

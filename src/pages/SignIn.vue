<template>
  <q-page>
    <div class="contentContainer ">
      <div class="bg-white greeting">
        <h1>{{ message }}</h1>
      </div>
      <div class="sectionContainer">
        <section class="sb-rewards ">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              class="q-pt-md"
              filled
              v-model="name"
              label="Your username *"
              hint="Name or email"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type your username'
              ]"
            />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Your password *"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') || 'Please type your password',
                val => (val > 0 && val < 100) || 'Please type a real password'
              ]"
            />

            <q-toggle
              v-model="accept"
              label="Keep me signed in"
              color="primary"
            />

            <div>
              <q-btn label="Sign in" type="submit" color="primary" />
            </div>
          </q-form>
        </section>

        <footer>
          <div class="footerContainer">
            <div class="info">
              <q-btn
                outline
                rounded
                color="positive"
                no-caps
                label="Find a store"
              />
              <ul>
                <li><a href="#">Responsibility</a></li>
                <li><a href="#">Web Accessibility</a></li>
                <li><a href="#">Privact Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>
            <span>&#169; 2019 Starbucks</span>
          </div>
        </footer>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "Sign in 🌟"
    };
  }
};
</script>

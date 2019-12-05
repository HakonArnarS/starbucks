<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-white text-white" height-hint="98">
      <q-toolbar>
        <!-- Starbucks Logo -->
        <q-item to="/">
          <img src="../statics/icons/starbucks-96x96.png" alt="logo - back to homepage" />
        </q-item>
        <!-- <q-btn to="/">
          <q-avatar>
            <img src="../statics/app-icon.png" alt="logo - back to homepage" />
          </q-avatar>
        </q-btn>-->
        <!-- <router-link to="/" class="cursor-pointer">   
        </router-link>-->
        <!-- Navigation links for larger nav -->
        <div class="lgNavContainer row items-center">
          <ul>
            <li class="listItem">
              <a href="#">order</a>
            </li>
            <li class="listItem">
              <a href="#">cards</a>
            </li>
            <li class="listItem">
              <a href="#">gift</a>
            </li>
          </ul>
          <div>
            <q-btn flat rounded icon="room" color="black" no-caps label="Find a store" />
            <q-btn outline rounded no-caps color="black" label="Sign in" to="/signin" />
            <q-btn unelevated rounded no-caps color="black" label="Join now" />
          </div>
        </div>

        <!-- Hamburger Menu Icon -->
        <q-icon dense flat name="menu" @click="right = !right" class="burger"></q-icon>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" overlay class="myDrawer">
      <!-- drawer content -->
      <q-icon name="close" @click="right = !right" />
      <nav class="drawerContent column">
        <div class="primaryContent">
          <ul>
            <li class="listItem">
              <a href="#">Order</a>
            </li>
            <li class="listItem">
              <a href="#">Cards</a>
            </li>
            <li class="listItem">
              <a href="#">Gift</a>
            </li>
          </ul>
          <div class="row drawerBtns">
            <q-btn outline rounded no-caps color="black" label="Sign in" to="/signin" />
            <q-btn unelevated rounded no-caps color="black" label="Join now" />
            <q-btn
              flat
              rounded
              icon="room"
              color="black"
              no-caps
              label="Find a store"
              class="q-pt-md"
            />
          </div>
        </div>
        <p>Privacy Statement &#124; Terms of Use</p>
      </nav>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false
    };
  }
};
</script>

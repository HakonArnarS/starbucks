<template>
  <q-page>
    <div class="contentContainer ">
      <div class="bg-white greeting">
        <h2>{{ message }}</h2>
      </div>
      <div class="sectionContainer">
        <section class="sb-rewards">
          <h5>starbucks &#174; rewards</h5>
          <q-carousel
            v-model="carousel.id"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            infinite
            control-color="white"
            prev-icon="keyboard_arrow_left"
            next-icon="keyboard_arrow_right"
            arrows
            color="little-whiter"
            class=" text-black shadow-1 rounded-borders flex-center"
          >
            <q-carousel-slide name="0" class="column no-wrap flex-center">
              <q-img
                :src="carousel[0].img"
                spinner-color="white"
                style="border-radius: 3px; "
              />
              <div class="q-mt-md text-center text-h5">
                <span>{{ carousel[0].text }}</span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="1" class="column no-wrap flex-center">
              <q-img
                :src="carousel[1].img"
                spinner-color="white"
                style="border-radius: 3px; "
              />
              <div class="q-mt-md text-center text-h5">
                <span>{{ carousel[1].text }}</span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="2" class="column no-wrap flex-center">
              <q-img
                :src="carousel[2].img"
                spinner-color="white"
                style="border-radius: 3px; "
              />
              <div class="q-mt-md text-center text-h5">
                <span>{{ carousel[2].text }}</span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="3" class="column no-wrap flex-center">
              <q-img
                :src="carousel[3].img"
                spinner-color="white"
                style="border-radius: 3px; "
              />
              <div class="q-mt-md text-center text-h5">
                <span>{{ carousel[3].text }}</span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="4" class="column no-wrap flex-center">
              <q-img
                :src="carousel[4].img"
                spinner-color="white"
                style="border-radius: 3px; "
              />
              <div class="q-mt-md text-center text-h5">
                <span>{{ carousel[4].text }}</span>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <div class="ctaContainer row">
            <q-btn unelevated rounded color="black" no-caps label="Join now" />
            <q-btn
              outline
              rounded
              color="color-font"
              no-caps
              label="Learn more"
            />
          </div>
        </section>
        <section class="news">
          <div class="cardsContainer">
            <q-card class="my-card">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/SPOT-TWO1_tcm121-57275.jpg"
                alt="hapy hour"
              />

              <q-card-section>
                <div class="text-h5">On any handcrafted drink</div>
              </q-card-section>

              <q-card-section>
                <p>
                  Happy Hour is buy one, get one free on 11/21 from 2–7 p.m.
                  Grande or larger. At participating stores 🎉
                </p>
              </q-card-section>
              <q-card-section>
                <q-btn
                  unelevated
                  rounded
                  color="positive"
                  no-caps
                  label="I'm in"
                />
              </q-card-section>
            </q-card>
            <q-card class="my-card">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/NewsNowAvailable-AppCard_tcm121-55908.png"
                alt="news now available"
              />

              <q-card-section>
                <div class="text-h5">We've got news</div>
              </q-card-section>

              <q-card-section>
                <p>
                  Enjoy free digital access to The Wall Street Journal, USA
                  Today and other newspapers during your visit.
                </p>
              </q-card-section>
              <q-card-section>
                <q-btn
                  unelevated
                  rounded
                  color="positive"
                  no-caps
                  label="Let's go"
                />
              </q-card-section>
            </q-card>
          </div>
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
    <q-btn
      to="/menu"
      unelevated
      rounded
      no-caps
      color="primary"
      label="Start an order"
      size="xl"
      class="orderBtn"
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "Good night. ☀️",
      carousel: [
        {
          id: 0,
          img:
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY19_UnAuthAppCarousel_SR4.0Acquisition_Card1_Final0315_re_tcm121-50223.jpg",
          text: "Let Starbucks® Rewards add a little joy to your day"
        },
        {
          id: 1,
          img:
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY19_UnAuthAppCarousel_SR4.0Acquisition_Card2_Final0315_re_tcm121-50224.jpg",
          text: "Signing up is easy and fast"
        },
        {
          id: 2,
          img:
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY19_UnAuthAppCarousel_SR4.0Acquisition_Card3_Final0315_re_tcm121-50225.jpg",
          text: "Exclusive offers, personalized for you"
        },
        {
          id: 3,
          img:
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY19_UnAuthAppCarousel_SR4.0Acquisition_Card4_Final0315_re_tcm121-50226.jpg",
          text: "Rewards in as few as 2-3 visits"
        },
        {
          id: 4,
          img:
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY19_UnAuthAppCarousel_SR4.0Acquisition_Card5_Final0315_re_tcm121-50228.jpg",
          text: "That means free drinks, food and more 🙌"
        }
      ]
    };
  }
};
</script>

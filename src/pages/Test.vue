<template>
  <q-page>
    <q-carousel
      v-model="carousel"
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
      class=" text-black shadow-1 rounded-borders flex-start q-pb-lg"
    >
      <q-carousel-slide :name="0" class="column no-wrap ">
        <q-img
          :src="carousel[0].img"
          spinner-color="white"
          style="border-radius: 3px; "
        />
        <div class="q-mt-md text-center text-h5">
          <span>{{ carousel[0].text }}</span>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <q-img
          :src="carousel[1].img"
          spinner-color="white"
          style="border-radius: 3px; "
        />
        <div class="q-mt-md text-center text-h5">
          <span>{{ carousel[1].text }}</span>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <q-img
          :src="carousel[2].img"
          spinner-color="white"
          style="border-radius: 3px; "
        />
        <div class="q-mt-md text-center text-h5">
          <span>{{ carousel[2].text }}</span>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center">
        <q-img
          :src="carousel[3].img"
          spinner-color="white"
          style="border-radius: 3px; "
        />
        <div class="q-mt-md text-center text-h5">
          <span>{{ carousel[3].text }}</span>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap flex-center">
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
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "Good morning. ☀️",
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

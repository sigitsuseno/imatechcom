<template>
  <section class="w-full bg-white text-blue-950">
    <div>
      <h2 class="text-4xl text-center font-bold py-6">Layanan Kami</h2>
    </div>
    <div class="w-full h-48 p-4">
      <swiper
        :navigation="false"
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        class="mySwiper h-full"
      >
        <swiper-slide>
          <div class="my-custom-slide">Slide 1</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 3</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 4</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 5</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 6</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 7</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 8</div>
        </swiper-slide>
        <swiper-slide>
          <div class="my-custom-slide">Slide 9</div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const modules = [Navigation, Pagination, Autoplay];
</script>

---

<style scoped>
.mySwiper .swiper-slide {
  width: 200px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.my-custom-slide {
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(214, 208, 208, 0.7);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.swiper-pagination-bullet {
  position: relative;
  top: 15px;
  background: red !important;
  opacity: 0.2;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>

<template>
  <section class="w-full bg-gray-100 relative">
    <swiper
      :modules="[EffectFade, Navigation, Thumbs]"
      :effect="'fade'"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }"
      :thumbs="{ swiper: thumbsSwiper }"
      @swiper="setMainSwiper"
      class="main-swiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div
          class="w-full h-[600px] bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-30 flex items-center p-8"
          >
            <div class="text-white max-w-lg ml-8">
              <h1 class="text-5xl font-bold mb-4">{{ slide.title }}</h1>
              <p class="text-lg">{{ slide.description }}</p>
              <button
                class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div
      class="absolute bottom-0 left-0 right-0 z-10 p-4 flex justify-end items-end w-full"
    >
      <div class="flex items-center flex-row-reverse space-x-4">
        <swiper
          @swiper="setThumbsSwiper"
          :modules="[FreeMode, Thumbs, Navigation]"
          :slidesPerView="'auto'"
          :loop="true"
          :spaceBetween="10"
          :freeMode="true"
          :watchSlidesProgress="true"
          class="thumbs-swiper"
        >
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="index"
            class="thumbnail-slide"
          >
            <img
              :src="slide.thumbnail"
              :alt="slide.title"
              class="w-[120px] h-[80px] object-cover cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all duration-300"
            />
          </swiper-slide>
        </swiper>

        <div class="flex gap-4">
          <button
            class="swiper-button-prev-custom bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            class="swiper-button-next-custom bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Perlu untuk beberapa efek bawaan, meskipun kita custom
import "swiper/css/effect-fade"; // Untuk efek fade
import "swiper/css/free-mode"; // Untuk thumbnail swiper
import "swiper/css/thumbs"; // Untuk thumbs module

import {
  EffectFade,
  Navigation,
  Pagination, // Diperlukan untuk pagination bawaan, tapi jika tidak dipakai, bisa dihapus
  FreeMode,
  Thumbs,
} from "swiper/modules";

// Data untuk slide (gambar utama dan thumbnail)
const slides = ref([
  {
    image: "https://picsum.photos/id/237/1920/1080", // Ganti dengan URL gambar Anda
    thumbnail: "https://picsum.photos/id/237/120/80", // Ganti dengan URL thumbnail Anda
    title: "Beautiful Scenery 1",
    description: "Explore the breathtaking landscapes and serene beauty.",
  },
  {
    image: "https://picsum.photos/id/238/1920/1080",
    thumbnail: "https://picsum.photos/id/238/120/80",
    title: "Urban Cityscape 2",
    description: "Experience the vibrant energy of a modern city.",
  },
  {
    image: "https://picsum.photos/id/239/1920/1080",
    thumbnail: "https://picsum.photos/id/239/120/80",
    title: "Nature's Embrace 3",
    description: "Immerse yourself in the tranquility of nature.",
  },
  {
    image: "https://picsum.photos/id/240/1920/1080",
    thumbnail: "https://picsum.photos/id/240/120/80",
    title: "Abstract Art 4",
    description: "Discover unique perspectives in abstract forms.",
  },
  {
    image: "https://picsum.photos/id/241/1920/1080",
    thumbnail: "https://picsum.photos/id/241/120/80",
    title: "Ocean View 5",
    description: "Relax by the calming waves of the ocean.",
  },
]);

// Variabel untuk menyimpan instance Swiper thumbnail
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

// Variabel untuk menyimpan instance Swiper utama (jika diperlukan interaksi langsung)
const mainSwiper = ref(null);
const setMainSwiper = (swiper) => {
  mainSwiper.value = swiper;
};

// Modules yang akan digunakan oleh Swiper
// Perhatikan bahwa modul Navigation dan Thumbs dibutuhkan di kedua Swiper
// EffectFade hanya untuk main-swiper, FreeMode hanya untuk thumbs-swiper
</script>

<style>
/* CSS Global untuk Swiper (jika belum ada di style.css utama Anda) */
.swiper {
  width: 100%;
  height: 100%;
}

/* Tinggi untuk Main Swiper */
.main-swiper {
  height: 600px;
}

/* Styling untuk Swiper Thumbnail */
.thumbs-swiper {
  width: auto; /* Agar tidak mengambil lebar penuh, hanya sesuai konten */
  max-width: 60%; /* Batasi lebar agar ada ruang untuk navigasi */
  height: 80px; /* Tinggi total swiper thumbnail */
  overflow: hidden; /* Pastikan konten tidak keluar */
}

.thumbnail-slide {
  width: 120px !important; /* Lebar thumbnail fix */
  height: 80px !important; /* Tinggi thumbnail fix */
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.thumbnail-slide-active {
  opacity: 1;
  border-color: #3b82f6 !important; /* Warna border aktif */
}

/* Custom styling untuk navigasi (SVG icons sudah ada di template) */
.swiper-button-prev-custom,
.swiper-button-next-custom {
  position: static !important; /* Agar tidak overlay, tapi bagian dari flex */
  margin: 0 !important; /* Hilangkan margin bawaan */
  width: 48px !important; /* Lebar tombol navigasi */
  height: 48px !important; /* Tinggi tombol navigasi */
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

/* Sembunyikan default navigation Swiper jika tidak digunakan */
.swiper-button-prev,
.swiper-button-next {
  display: none !important;
}
</style>

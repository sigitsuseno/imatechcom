<script setup>
import { NuxtLink, NuxtImg } from "#components";
import { ref, onMounted, onUnmounted } from "vue";

const openMenu = ref(false);

const isHeaderFixed = ref(false);
const headerOpacity = ref(1); // Set opacity awal menjadi 1

const handleScroll = () => {
  if (window.scrollY > 200) {
    isHeaderFixed.value = true;
    headerOpacity.value = 1;
  } else if (window.scrollY > 112) {
    isHeaderFixed.value = false;
    headerOpacity.value = 1 - (window.scrollY - 112) / (200 - 112); // Opacity berkurang saat scroll
  } else {
    isHeaderFixed.value = false;
    headerOpacity.value = 1; // Tetap tampil di awal
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Set initial state based on initial scroll position (biasanya 0)
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="{
      'fixed top-0 left-0 right-0 z-10 bg-white shadow-md': isHeaderFixed,
      relative: !isHeaderFixed,
    }"
    :style="{ opacity: headerOpacity }"
  >
    <div
      class="absolute top-0 left-0 z-20 w-full bg-blue-500 flex justify-between items-center px-4 py-2 lg:hidden"
    >
      <NuxtLink to="/" class="w-12 h-12 bg-white rounded-lg p-1">
        <NuxtImg
          width="48px"
          src="/imatech.svg"
          alt="imatechcom"
          class="h-10 object-contain"
        />
      </NuxtLink>
      <div class="text-2xl">
        <button @click="openMenu = !openMenu">
          <Icon name="healthicons:ui-menu-grid-outline" style="color: black" />
        </button>
      </div>
    </div>
    <div :class="['header-container', openMenu ? 'show' : '']">
      <NuxtLink
        to="/"
        class="w-[150px] lg:w-[250px] h-12 lg:h-16 absolute left-4 lg:left-1/2 lg:-translate-x-1/2 flex items-center"
      >
        <NuxtImg
          width="250px"
          src="/imatech-logo-long.png"
          alt="imatechcom"
          class="h-12 object-contain"
        />
      </NuxtLink>

      <div class="wrapper z-10 text-white lg:text-black">
        <div class="main-panel pt-20 pb-4 lg:pt-0 lg:pb-0">
          <div
            class="container mx-auto px-4 lg:grid lg:grid-cols-[1fr_300px_1fr] lg:h-16 justify-between items-center"
          >
            <div
              class="items-center gap-4 flex justify-center lg:justify-start flex-col lg:flex-row"
            >
              <NuxtLink to="/about" class="hover:font-semibold block"
                >About</NuxtLink
              >
              <NuxtLink to="/profile" class="hover:font-semibold block"
                >Profile</NuxtLink
              >
              <NuxtLink to="/contact" class="hover:font-semibold block"
                >Contact</NuxtLink
              >
            </div>

            <div
              class="w-full lg:flex items-center justify-center hidden"
            ></div>

            <div
              class="items-center gap-4 flex justify-center lg:justify-end flex-col lg:flex-row mt-4 lg:mt-0"
            >
              <NuxtLink
                to="https://store.imatechcom.com"
                class="hover:font-semibold block"
                target="_blank"
                >Store</NuxtLink
              >
              <NuxtLink to="/portofolio" class="hover:font-semibold block"
                >Portofolio</NuxtLink
              >
              <NuxtLink to="/auth/login" class="hover:font-semibold block">
                Login
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="layanan-panel lg:bg-blue-100">
          <nav class="container mx-auto">
            <ul
              class="flex items-center justify-center gap-4 py-2 flex-col lg:flex-row"
            >
              <li>
                <a href="#" class="w-44 h-8 flex items-center justify-center">
                  <span class="nav_anim" data-content="Komputer & Laptop"
                    >Komputer & Laptop</span
                  >
                </a>
              </li>
              <li>
                <a href="#" class="w-44 h-8 flex items-center justify-center">
                  <span class="nav_anim" data-content="CCTV">CCTV</span>
                </a>
              </li>
              <li>
                <a href="#" class="w-44 h-8 flex items-center justify-center">
                  <span class="nav_anim" data-content="Jaringan">Jaringan</span>
                </a>
              </li>
              <li>
                <a href="#" class="w-44 h-8 flex items-center justify-center">
                  <span class="nav_anim" data-content="Pengadaan"
                    >Pengadaan</span
                  >
                </a>
              </li>
              <li>
                <a href="#" class="w-44 h-8 flex items-center justify-center">
                  <span class="nav_anim" data-content="Website & APP"
                    >Website & APP</span
                  >
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 1023.99px) {
  header {
    height: 64px;
    .header-container {
      position: fixed;
      width: 100%;
      height: 100vh;
      left: -100%;
      background-color: #021f3a62;
      transition: all 0.3s ease-in-out;
      .wrapper {
        position: relative;
        width: 300px;
        height: 100vh;
        background-color: #0084ff;
      }
    }
    .header-container.show {
      position: fixed;
      width: 100%;
      height: 100vh;
      left: 0;
      background-color: #021f3a62;
      transition: all 0.3s ease-in-out;
      .wrapper {
        position: relative;
        width: 300px;
        height: 100vh;
        background-color: #0084ff;
      }
    }
  }

  a {
    .nav_anim {
      position: relative;
      width: 172px;
      height: 32px;
      padding: 0.2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #dbeafe;
    }
    .nav_anim::before {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(1);
      background-color: #dbeafe;
      color: #000;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      transform-origin: top;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav_anim::after {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(0);
      background-color: #000;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      transform-origin: bottom;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav_anim:hover:before {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(0);
      transform-origin: top;
      background-color: #dbeafe;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav_anim:hover:after {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(1);
      transform-origin: bottom;
      background-color: #000;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media (min-width: 1024px) {
  header {
    background-color: #97c2fa;
    transition: all 0.3s ease-in-out; /* Animasi untuk semua properti */
  }
  a {
    .nav_anim {
      position: relative;
      width: 172px;
      height: 32px;
      padding: 0.2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #dbeafe;
    }
    .nav_anim::before {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(1);
      background-color: #dbeafe;
      color: #000;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      transform-origin: top;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav_anim::after {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(0);
      background-color: #000;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      transform-origin: bottom;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav_anim:hover:before {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(0);
      transform-origin: top;
      background-color: #dbeafe;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav_anim:hover:after {
      content: attr(data-content);
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 172px;
      height: 32px;
      transform: scaleY(1);
      transform-origin: bottom;
      background-color: #000;
      padding: 0.2rem 1rem;
      transition: all 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

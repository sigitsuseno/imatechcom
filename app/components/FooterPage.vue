<template>
  <footer class="w-full bg-blue-700 text-white py-12">
    <div
      class="container mx-auto flex flex-col justify-start items-start lg:flex-row"
    >
      <div class="w-full lg:w-1/3 p-4">
        <NuxtLink
          to="/"
          class="flex items-center justify-center lg:justify-start h-14 my-4"
        >
          <div class="px-3 py-2 bg-white rounded-md">
            <img src="/imatech-logo-long.png" alt="" class="h-12" />
          </div>
        </NuxtLink>
        <p class="w-2/3 mx-auto text-center py-4 lg:w-full lg:text-left">
          Kami memberikan Solusi IT untuk Perusahaan dan Perseorangan dengan
          pengalaman lebih dari 15 tahun.
        </p>
        <!-- sosial media -->
        <div
          class="flex items-center justify-center lg:justify-start gap-4 mt-8"
        >
          <nuxt-link
            to="#"
            class="p-2 rounded-md shadow shadow-black/20 flex justify-center items-center hover:bg-white/20 transition duration-200 bg-blue-800"
          >
            <Icon name="uil:facebook" class="text-white text-3xl" />
          </nuxt-link>
          <nuxt-link
            to="#"
            class="p-2 rounded-md shadow shadow-black/20 flex justify-center items-center hover:bg-white/20 transition duration-200 bg-blue-800"
          >
            <Icon name="uil:instagram" class="text-white text-3xl" />
          </nuxt-link>
          <nuxt-link
            to="#"
            class="p-2 rounded-md shadow shadow-black/20 flex justify-center items-center hover:bg-white/20 transition duration-200 bg-blue-800"
          >
            <Icon name="uil:google" class="text-white text-3xl" />
          </nuxt-link>
          <nuxt-link
            to="#"
            class="p-2 rounded-md shadow shadow-black/20 flex justify-center items-center hover:bg-white/20 transition duration-200 bg-blue-800"
          >
            <Icon name="uil:telegram" class="text-white text-3xl" />
          </nuxt-link>
          <nuxt-link
            to="#"
            class="p-2 rounded-md shadow shadow-black/20 flex justify-center items-center hover:bg-white/20 transition duration-200 bg-blue-800"
          >
            <Icon name="uil:whatsapp" class="text-white text-3xl" />
          </nuxt-link>
        </div>
      </div>
      <div class="w-full lg:w-1/3 p-4">
        <h3 class="text-2xl font-bold tracking-wider">Quick Link</h3>
        <div class="grid grid-cols-2">
          <div class="mt-6 space-y-2">
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> about </span>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> profile </span>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> store </span>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> portofolio </span>
            </NuxtLink>

            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> contact </span>
            </NuxtLink>
          </div>
          <div class="mt-6 space-y-2">
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> Komputer & Laptop </span>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> CCTV </span>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> Jaringan </span>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> Pengadaan </span>
            </NuxtLink>

            <NuxtLink
              to="#"
              class="flex items-center hover:translate-x-4 transition-transform duration-300"
            >
              <Icon name="flowbite:caret-right-solid" />
              <span class="capitalize"> Website & APP </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 p-4">kiri</div>
    </div>
  </footer>
</template>

<script setup></script>

<style></style>

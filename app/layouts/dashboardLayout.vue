<template>
  <header class="fixed top-0 right-0 h-16 w-full lg:w-[calc(100%-80px)]">
    <div
      class="w-full h-full bg-slate-200 flex justify-between items-center px-4"
    >
      <div>Kiri</div>
      <div>nama</div>
    </div>
  </header>
  <DashboardSidebarPanel
    :isOpen="openSidebar"
    @update:isOpen="openSidebar = $event"
  />
  <main
    class="w-full mb-16 mt-16 border-b lg:w-[calc(100%-80px)] lg:ml-20 lg:mb-0"
  >
    <slot></slot>
  </main>
  <div
    class="fixed w-full md:max-w-96 md:mx-auto bottom-0 left-0 right-0 h-14 lg:hidden bg-slate-300 z-40 md:rounded-t-xl"
  >
    <div class="w-full h-full grid grid-cols-5 items-center justify-center">
      <button class="flex items-center justify-center">
        <Icon name="mi:home" class="text-4xl" />
      </button>
      <button class="flex items-center justify-center">
        <Icon name="hugeicons:quill-write-02" class="text-4xl" />
      </button>
      <button class="flex items-center justify-center">
        <Icon name="streamline:user-profile-focus" class="text-4xl" />
      </button>
      <button class="flex items-center justify-center">
        <Icon name="tabler:brand-appgallery" class="text-4xl" />
      </button>
      <button
        class="flex items-center justify-center"
        @click="openSidebar = !openSidebar"
      >
        <Icon name="ep:menu" class="text-4xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openSidebar = ref(false);
</script>

<style></style>

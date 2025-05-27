<template>
  <web-navigation />
  <main>
    <slot></slot>
  </main>
  <footer-page />
</template>

<script setup>
import WebNavigation from "~/components/WebNavigation.vue";
import FooterPage from "~/components/FooterPage.vue";
</script>

<style></style>

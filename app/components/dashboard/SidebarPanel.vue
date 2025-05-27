<template>
  <aside
    :class="[
      'w-[220px] lg:w-20 h-screen lg:hover:w-[220px] fixed top-0 left-0 bg-slate-200 transition-all duration-300',
      isOpen ? 'translate-x-0' : 'translate-x-[-220px] lg:translate-x-0',
    ]"
  >
    test
    <button @click="$emit('update:isOpen', false)" class="lg:hidden">
      Close
    </button>
  </aside>
</template>
>

<script setup>
defineProps({
  isOpen: Boolean,
});

defineEmits(["update:isOpen"]);
</script>

<style></style>

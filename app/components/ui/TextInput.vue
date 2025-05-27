<template>
  <div>
    <label :for="name" class="capitalize">{{ title }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      v-model="inputValue"
      class="w-full px-4 py-2 text-base focus:border-0 rounded-md focus:outline-blue-200 outline outline-1 outline-slate-300"
    />
    <span v-if="er_message" class="text-xs text-red-500">
      {{ er_message }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"; // Impor ref dan watch

const props = defineProps({
  name: {
    type: String,
    required: true, // Diperbaiki: requred -> required
  },
  type: {
    type: String,
    default: "text", // Diperbaiki: defaults -> default
  },
  title: {
    type: String,
    default: "input title", // Diperbaiki: defaults -> default
  },
  // er_message sekarang memiliki default string kosong untuk menghindari tampilan 'undefined'
  er_message: {
    type: String,
    default: "",
  },
  // Tambahkan prop 'modelValue' untuk v-model compatibility
  modelValue: {
    type: [String, Number], // Bisa string atau number, tergantung type input
    default: "",
  },
});

// Emit event untuk v-model:update
const emit = defineEmits(["update:modelValue"]);

// Gunakan ref untuk menyimpan nilai input lokal
const inputValue = ref(props.modelValue);

// Watcher untuk mengupdate inputValue jika modelValue dari parent berubah
watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);

// Watcher untuk mengemit event update:modelValue saat inputValue berubah
watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style scoped>
/* Opsional: Tambahkan styling khusus komponen di sini */
</style>

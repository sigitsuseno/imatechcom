<template>
  <section
    class="w-full h-screen px-4 md:px-0 py-8 flex justify-center items-center"
  >
    <div
      class="w-full sm:w-80 lg:w-96 mx-auto p-6 rounded-xl bg-slate-50 shadow-lg space-y-4"
    >
      <NuxtLink to="/" class="flex justify-center items-center flex-col">
        <img src="/imatech.svg" alt="" class="h-12" />
        <h1 class="text-xl font-bold tracking-wider">IMATECHCOM</h1>
      </NuxtLink>
      <div
        class="w-full bg-slate-200 text-center px-4 py-2 rounded-lg ring ring-blue-100"
      >
        <p class="text-xl">Login</p>
        <p class="text-xs">
          Jika belum punya akun daftar
          <NuxtLink
            to="/auth/register"
            class="font-bold tracking-wider text-blue-600 hover:underline"
            >disini</NuxtLink
          >
        </p>
      </div>
      <form>
        <div class="mb-3">
          <label for="email" class="text-sm">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            class="w-full focus:outline-blue-400 focus:bg-blue-50 outline outline-1 outline-slate-300 px-4 py-2 rounded-md"
          />
        </div>
        <div class="mb-1">
          <label for="password" class="text-sm">Password</label>
          <div class="grid grid-cols-[1fr_48px]">
            <input
              id="password"
              name="password"
              type="password"
              class="w-full focus:outline-blue-400 focus:bg-blue-50 outline outline-1 outline-slate-300 px-4 py-2 rounded-l-md"
            />
            <button
              class="bg-blue-500 flex items-center justify-center rounded-r-md outline outline-1 outline-blue-500 text-white"
            >
              <Icon name="wpf:invisible" class="text-xl hidden" />
              <Icon name="ant-design:eye-invisible-outlined" class="text-xl" />
            </button>
          </div>
        </div>
        <div class="mb-3">
          <label class="flex gap-2 items-center">
            <input type="checkbox" />
            <span class="text-xs">Remember me</span>
          </label>
        </div>
        <div>
          <button
            type="submit"
            class="w-full px-4 h-12 rounded-lg outline outline-1 font-semibold tracking-wider outline-blue-500 hover:bg-blue-300 transition duration-200-md shadow"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        <p
          class="w-full text-center relative before:absolute before:content-[''] before:h-[2px] before:w-full before:bg-slate-300 before:top-3 before:left-0"
        >
          <span class="relative bg-slate-50 px-3">Atau</span>
        </p>
      </div>
      <div>
        <button
          class="w-full flex items-center justify-center h-12 rounded-lg shadow-md outline outline-1 outline-blue-500 hover:bg-blue-300 transition duration-200"
        >
          <Icon name="flat-color-icons:google" class="text-4xl" />
          <span>Login with google</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
});
</script>

<style></style>

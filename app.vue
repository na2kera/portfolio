<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- ヘッダー -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-black p-4 flex justify-between items-center"
    >
      <NuxtLink to="/">
        <div class="text-2xl font-bold">Portfolio</div>
      </NuxtLink>
      <div class="flex gap-4">
        <NuxtLink :to="route.path === '/about' ? '/' : '/about'">
          <button
            class="relative px-7 py-3.5 text-base font-bold text-white border-2 border-rose-500 rounded-lg cursor-pointer overflow-hidden z-[1] transition-all duration-300 shadow-lg hover:shadow-rose-500/20 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-pink-500 before:-translate-x-full before:transition-transform before:duration-300 before:ease-out before:-z-[1] hover:before:translate-x-0 hover:scale-[1.02]"
          >
            {{ route.path === "/about" ? "プロダクト一覧" : "私について" }}
          </button>
        </NuxtLink>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="pt-20">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

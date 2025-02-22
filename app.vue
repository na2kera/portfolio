<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- ヘッダー -->
    <header class="bg-black p-4 flex justify-between items-center">
      <div class="text-2xl font-bold">Portfolio</div>
      <div class="flex gap-4">
        <NuxtLink :to="route.path === '/about' ? '/' : '/about'">
          <button
            class="px-4 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            {{ route.path === "/about" ? "プロダクト一覧" : "私について" }}
          </button>
        </NuxtLink>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- ヘッダー -->
    <header class="bg-black p-4 flex justify-between items-center">
      <div class="text-2xl font-bold">Portfolio</div>
      <div class="flex gap-4">
        <button
          class="px-4 py-2 rounded-full border border-orange-500 text-orange-500"
        >
          私について
        </button>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>

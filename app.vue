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
      <!-- 最新の制作物 -->
      <div class="p-8">
        <h2 class="text-2xl font-bold mb-6">制作物一覧</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: "プロジェクト1",
    date: "2025.1.23",
    description: "プロジェクトの説明文がここに入ります",
    image: "/images/projects/3AI.webp",
  },
  {
    id: 2,
    title: "プロジェクト2",
    date: "2025.2.10",
    description: "プロジェクトの説明文がここに入ります",
    image: "/images/projects/refty.png",
  },
];
</script>

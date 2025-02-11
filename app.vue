<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- ヘッダー -->
    <header class="bg-black p-4 flex justify-between items-center">
      <div class="text-2xl font-bold">Portfolio</div>
      <div class="flex gap-4">
        <button
          class="px-4 py-2 rounded-full border border-orange-500 text-orange-500"
        >
          Login
        </button>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main>
      <!-- カルーセルセクション -->
      <div class="relative w-full h-64 overflow-hidden">
        <!-- カルーセルの実装は省略 -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-50"
        ></div>
      </div>

      <!-- メインナビゲーション -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
        <NavButton icon="user" text="プロフィール" />
        <NavButton icon="calendar" text="スキル" />
        <NavButton icon="projects" text="制作物" />
        <NavButton icon="contact" text="SNS" />
      </div>

      <!-- 最新の制作物 -->
      <div class="p-8">
        <h2 class="text-2xl font-bold mb-6">最新の制作物</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div class="text-center mt-8">
          <button class="px-8 py-3 bg-orange-500 rounded-full">
            All Projects
          </button>
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
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    title: "プロジェクト2",
    date: "2025.2.10",
    description: "プロジェクトの説明文がここに入ります",
    image: "/path/to/image2.jpg",
  },
];
</script>

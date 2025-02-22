<script setup lang="ts">
import { projects } from "~/data/projects";

const route = useRoute();
const projectId = parseInt(route.params.id as string);
const project = computed(() => projects.find((p) => p.id === projectId));

// プロジェクトが見つからない場合は404ページにリダイレクト
if (!project.value) {
  throw createError({ statusCode: 404, message: "Project not found" });
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div v-if="project" class="space-y-8">
      <!-- プロジェクトタイトルと日付 -->
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-2">{{ project.title }}</h1>
        <p class="text-gray-600">{{ project.date }}</p>
      </div>

      <!-- プロジェクト画像ギャラリー -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          v-for="(image, index) in project.images"
          :key="index"
          :src="image"
          :alt="`${project.title} image ${index + 1}`"
          class="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <!-- プロジェクト説明 -->
      <div class="prose max-w-none">
        <p>{{ project.description }}</p>
      </div>

      <!-- 関連リンク -->
      <div
        v-if="project.urls?.length || project.slide || project.movie"
        class="space-y-4"
      >
        <h2 class="text-2xl font-bold">関連リンク</h2>

        <div class="space-y-2">
          <div v-if="project.urls?.length" class="flex flex-wrap gap-3">
            <a
              v-for="(url, index) in project.urls"
              :key="index"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md h-10"
            >
              <i class="i-mdi-github text-xl"></i>
              <span class="leading-none">{{
                project.urlTitles?.[index] || "GitHubリポジトリ"
              }}</span>
            </a>
          </div>

          <a
            v-if="project.slide"
            :href="project.slide"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md h-10"
          >
            <i class="i-mdi-presentation text-xl"></i>
            <span class="leading-none">スライド</span>
          </a>

          <div v-if="project.movie" class="aspect-video">
            <iframe
              :src="project.movie"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

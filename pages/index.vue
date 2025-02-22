<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        制作物一覧
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>

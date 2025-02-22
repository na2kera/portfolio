<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold mb-8 text-white">制作物一覧</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>

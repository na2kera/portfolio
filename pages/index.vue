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
          class="transform opacity-0 translate-y-8 transition-all duration-500"
          :class="{ 'animate-fade-in-up': true }"
          :style="{ 'animation-delay': `${project.id * 150}ms` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>

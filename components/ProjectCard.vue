<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden">
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <div class="text-sm text-gray-400">{{ project.date }}</div>
      <h3 class="text-lg font-bold mt-2">{{ project.title }}</h3>
      <p class="text-sm text-gray-300 mt-2">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

defineProps<{
  project: Project;
}>();
</script>

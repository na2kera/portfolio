<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden w-full md:w-96">
    <img
      :src="project.thumbnail"
      :alt="project.title"
      class="w-full h-[calc(100vw*9/16)] md:h-[calc(24rem*9/16)] object-cover"
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
  thumbnail: string;
  images: string[];
  urls?: string[];
  movie?: string;
  slide?: string;
}

const props = defineProps<{
  project: Project;
}>();

console.log("project", props.project);
</script>

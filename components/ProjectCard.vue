<template>
  <NuxtLink :to="`/projects/${project.id}`" class="block group">
    <div
      class="bg-gray-800 rounded-lg overflow-hidden w-full md:w-96 transition-all duration-500 ease-out transform-gpu hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_80px_-10px_rgba(252,70,107,0.15)]"
    >
      <img
        :src="project.thumbnail"
        :alt="project.title"
        class="w-full h-[calc(100vw*9/16)] md:h-[calc(24rem*9/16)] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div class="p-4 relative z-10">
        <div
          class="text-sm text-gray-400 transition-colors duration-500 group-hover:text-gray-300"
        >
          {{ project.date }}
        </div>
        <h3
          class="text-lg font-bold mt-2 transition-colors duration-500 group-hover:text-white"
        >
          {{ project.title }}
        </h3>
        <p
          class="text-sm text-gray-300 mt-2 transition-colors duration-500 group-hover:text-gray-200"
        >
          {{ project.description }}
        </p>
      </div>
    </div>
  </NuxtLink>
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

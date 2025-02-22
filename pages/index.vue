<template>
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
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>

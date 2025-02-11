<template>
  <div
    class="flex flex-col items-center p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
  >
    <div class="w-12 h-12 mb-2">
      <img :src="`/icons/${icon}.svg`" :alt="text" class="w-full h-full" />
    </div>
    <span class="text-sm">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  text: string;
}>();
</script>

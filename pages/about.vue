<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- プロフィールヘッダー -->
    <div class="text-center mb-12 opacity-0 animate-fade-in">
      <img
        :src="profile.avatar"
        :alt="profile.name"
        class="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h1 class="text-4xl font-bold mb-4">{{ profile.name }}</h1>
      <p class="text-xl text-gray-600">{{ profile.title }}</p>
    </div>

    <!-- 自己紹介 -->
    <div class="mb-12 opacity-0 animate-fade-in" style="animation-delay: 200ms">
      <h2 class="text-2xl font-bold mb-4">About Me</h2>
      <p class="text-gray-300 leading-relaxed">{{ profile.bio }}</p>
    </div>

    <!-- スキル -->
    <div class="mb-12 opacity-0 animate-fade-in" style="animation-delay: 400ms">
      <h2 class="text-2xl font-bold mb-6">Skills</h2>
      <div class="space-y-6">
        <div
          v-for="(skillSet, index) in profile.skills"
          :key="skillSet.category"
          class="opacity-0 animate-fade-in"
          :style="{ animationDelay: `${500 + index * 100}ms` }"
        >
          <h3 class="text-xl font-semibold mb-3">{{ skillSet.category }}</h3>
          <div class="flex flex-wrap gap-2">
            <img
              v-for="skill in skillSet.items"
              :src="skill"
              :alt="skill"
              class="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 学歴 -->
    <div class="mb-12 opacity-0 animate-fade-in" style="animation-delay: 600ms">
      <h2 class="text-2xl font-bold mb-6">Education</h2>
      <div class="space-y-4">
        <div
          v-for="(edu, index) in profile.education"
          :key="edu.school"
          class="border-l-2 border-gray-700 pl-4 opacity-0 animate-fade-in"
          :style="{ animationDelay: `${700 + index * 100}ms` }"
        >
          <h3 class="text-xl font-semibold">{{ edu.school }}</h3>
          <p class="text-gray-400">{{ edu.degree }}</p>
          <p class="text-gray-500 text-sm">{{ edu.period }}</p>
        </div>
      </div>
    </div>

    <!-- タイムライン -->
    <div class="mb-12 opacity-0 animate-fade-in" style="animation-delay: 800ms">
      <h2 class="text-2xl font-bold mb-6">Timeline</h2>
      <div class="relative space-y-8">
        <div
          class="absolute left-4 top-0 h-[calc(100%)] w-0.5 bg-gray-700"
        ></div>

        <div
          v-for="(event, index) in profile.timeline"
          :key="index"
          class="relative pl-12 opacity-0 animate-fade-in"
          :style="{ animationDelay: `${900 + index * 100}ms` }"
        >
          <div
            class="absolute left-4 top-1/2 h-3 w-3 rounded-full bg-gray-700 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div class="bg-gray-800 rounded-lg p-4">
            <div class="text-sm text-gray-400 mb-2">{{ event.date }}</div>
            <h3 class="text-lg font-semibold mb-2">{{ event.title }}</h3>
            <p class="text-gray-300">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- コンタクト -->
    <div class="opacity-0 animate-fade-in" style="animation-delay: 1000ms">
      <h2 class="text-2xl font-bold mb-6">SNS</h2>
      <div class="flex gap-4">
        <NuxtLink
          v-for="contact in profile.contacts"
          :key="contact.platform"
          :to="contact.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="contact.icon"
            :alt="contact.platform"
            class="w-8 h-8 brightness-0 invert"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>

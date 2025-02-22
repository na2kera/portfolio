<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- プロフィールヘッダー -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">{{ profile.name }}</h1>
      <p class="text-xl text-gray-600">{{ profile.title }}</p>
    </div>

    <!-- 自己紹介 -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4">About Me</h2>
      <p class="text-gray-300 leading-relaxed">{{ profile.bio }}</p>
    </div>

    <!-- スキル -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Skills</h2>
      <div class="space-y-6">
        <div v-for="skillSet in profile.skills" :key="skillSet.category">
          <h3 class="text-xl font-semibold mb-3">{{ skillSet.category }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in skillSet.items"
              :key="skill"
              class="px-3 py-1 bg-gray-700 rounded-full text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 学歴 -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Education</h2>
      <div class="space-y-4">
        <div
          v-for="edu in profile.education"
          :key="edu.school"
          class="border-l-2 border-gray-700 pl-4"
        >
          <h3 class="text-xl font-semibold">{{ edu.school }}</h3>
          <p class="text-gray-400">{{ edu.degree }}</p>
          <p class="text-gray-500 text-sm">{{ edu.period }}</p>
        </div>
      </div>
    </div>

    <!-- コンタクト -->
    <div>
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

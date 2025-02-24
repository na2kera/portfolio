<script setup lang="ts">
import { projects } from "~/data/projects";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const route = useRoute();
const projectId = parseInt(route.params.id as string);
const project = computed(() => projects.find((p) => p.id === projectId));

// プロジェクトが見つからない場合は404ページにリダイレクト
if (!project.value) {
  throw createError({ statusCode: 404, message: "Project not found" });
}

// モーダル用の状態管理
const isModalOpen = ref(false);
const selectedImageIndex = ref(0);

// モーダルを開く関数
const openModal = (index: number) => {
  selectedImageIndex.value = index;
  isModalOpen.value = true;
};

// モーダルを閉じる関数
const closeModal = () => {
  isModalOpen.value = false;
};

// OGP設定
useHead(() => ({
  title: project.value
    ? `${project.value.title} | ぴーなっつのポートフォリオ`
    : "Project Not Found",
  meta: [
    {
      name: "description",
      content: project.value?.description || "プロジェクトの詳細ページです。",
    },
    {
      property: "og:title",
      content: project.value
        ? `${project.value.title} | ぴーなっつのポートフォリオ`
        : "Project Not Found",
    },
    {
      property: "og:description",
      content: project.value?.description || "プロジェクトの詳細ページです。",
    },
    {
      property: "og:image",
      content: project.value
        ? project.value.thumbnail
        : "https://portfolio-psi-eight-21.vercel.app/ogp.jpg",
    },
    {
      property: "og:url",
      content: `https://portfolio-psi-eight-21.vercel.app/projects/${projectId}`,
    },
  ],
}));
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div v-if="project" class="space-y-8">
      <!-- プロジェクトタイトルと日付 -->
      <div class="text-center opacity-0 animate-fade-in">
        <h1 class="text-3xl font-bold mb-2">{{ project.title }}</h1>
        <p class="text-gray-600">{{ project.date }}</p>
      </div>

      <!-- プロジェクト画像ギャラリー -->
      <div
        class="w-full h-[calc(100vw*3/4)] max-h-[500px] opacity-0 animate-fade-in"
        style="animation-delay: 200ms"
      >
        <Swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="1"
          :space-between="30"
          :navigation="true"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          class="w-full h-full rounded-lg"
        >
          <SwiperSlide
            v-for="(image, index) in project.images"
            :key="index"
            class="cursor-pointer"
            @click="openModal(index)"
          >
            <img
              :src="image"
              :alt="`${project.title} image ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- 画像モーダル -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        @click="closeModal"
      >
        <div class="relative max-w-[90vw] max-h-[90vh]">
          <img
            :src="project.images[selectedImageIndex]"
            :alt="`${project.title} image ${selectedImageIndex + 1}`"
            class="max-w-full max-h-[90vh] object-contain"
          />
          <button
            class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            @click="closeModal"
          >
            <i class="i-mdi-close text-2xl"></i>
          </button>
        </div>
      </div>

      <!-- プロジェクト説明 -->
      <div
        class="prose max-w-none opacity-0 animate-fade-in"
        style="animation-delay: 400ms"
      >
        <p>{{ project.description }}</p>
      </div>

      <!-- 関連リンク -->
      <div
        v-if="project.urls?.length || project.slide || project.movie"
        class="space-y-4 opacity-0 animate-fade-in"
        style="animation-delay: 600ms"
      >
        <h2 class="text-2xl font-bold">関連リンク</h2>

        <div class="space-y-2">
          <div v-if="project.urls?.length" class="flex flex-wrap gap-3">
            <a
              v-for="(url, index) in project.urls"
              :key="index"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md h-10"
            >
              <i class="i-mdi-github text-xl"></i>
              <span class="leading-none">{{
                project.urlTitles?.[index] || "GitHubリポジトリ"
              }}</span>
            </a>
          </div>

          <a
            v-if="project.slide"
            :href="project.slide"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md h-10"
          >
            <i class="i-mdi-presentation text-xl"></i>
            <span class="leading-none">スライド</span>
          </a>
        </div>
      </div>

      <!-- プロジェクト動画 -->
      <div
        v-if="project.movie"
        class="opacity-0 animate-fade-in"
        style="animation-delay: 800ms"
      >
        <h2 class="text-2xl font-bold">プロジェクト動画</h2>
        <div v-if="project.movie" class="aspect-video">
          <iframe
            :src="project.movie"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #f97316; /* orange-500 */
}

:deep(.swiper-pagination-bullet-active) {
  background: #f97316; /* orange-500 */
}

/* モーダル表示時にスクロールを無効化 */
:deep(body.modal-open) {
  overflow: hidden;
}

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

/* スライダーのフェードイン */
:deep(.swiper-slide) {
  opacity: 0;
  transition: opacity 0.5s ease;
}

:deep(.swiper-slide-active) {
  opacity: 1;
}

/* モーダルのアニメーション */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-content {
  animation: modalFadeIn 0.3s ease-out forwards;
}
</style>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="(item, index) in items" :key="index" style="transform-style: preserve-3d">
      <CardContainer>
        <CardBody
          class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-5 sm:w-full dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
        >
          <CardItem :translate-z="50" class="text-lg font-bold text-neutral-600 dark:text-white">
            {{ item.title || 'Project Title' }}
          </CardItem>
          <CardItem
            as="p"
            translate-z="60"
            class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            {{ item.description || 'N/A' }}
          </CardItem>
          <CardItem :translate-z="100" class="mt-3 w-full">
            <img
              v-if="item.image?.url"
              :src="getImageUrl(item.image)"
              height="1000"
              width="1000"
              class="h-56 w-full rounded-lg object-cover group-hover/card:shadow-xl"
              :alt="item.title || 'Project thumbnail'"
            />
            <div v-else class="h-56 w-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span class="text-gray-400">No image</span>
            </div>
          </CardItem>
          <div class="mt-6 flex items-center justify-between">
            <CardItem
              :translate-z="20"
              as="a"
              :href="item.github || '#'"
              target="__blank"
              class="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-1.5"
            >
              <img src="/github-mark.svg" alt="GitHub" class="w-4 h-4" />
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4"
              >
                <path
                  d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"
                />
                <path
                  d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"
                />
              </svg>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  </div>
</template>

<script setup>
import { CardContainer, CardBody, CardItem } from '@/components/ui/card-3d'
</script>

<script>
import strapiService from '@/services/strapi'

export default {
  name: 'Project',
  data() {
    return {
      items: [],
    }
  },

  methods: {
    async fetchProjectsData() {
      try {
        this.loading = true
        const response = await strapiService.getProjects()
        return response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    getImageUrl(media) {
      return strapiService.getMediaUrl(media)
    },
  },

  async mounted() {
    this.items = await this.fetchProjectsData()
  },
}
</script>

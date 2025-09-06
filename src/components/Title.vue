<template v-if="user">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
    <!-- Left Column (3/4 width on medium screens and up) -->
    <div class="md:col-span-3">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ user.name }}</h1>
      <p class="text-gray-500 text-xl mb-4">{{ user.job }}</p>
      <p class="text-gray-700 mb-4">
        {{ user.description }}
      </p>
      <div class="flex flex-col space-y-3">
        <a
          href="tel:+60199700375"
          class="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 inline-flex items-center"
        >
          <span class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
              />
              <path
                fill-rule="evenodd"
                d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          {{ user.contact?.phone }}
        </a>
        <a
          href="mailto:jeremy.nathan1@gmail.com"
          class="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 inline-flex items-center"
        >
          <span class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          {{ user.contact?.email }}
        </a>
      </div>
    </div>

    <!-- Right Column (1/4 width on medium screens and up) -->
    <div class="flex justify-center md:justify-end">
      <!-- Avatar -->
      <div class="w-32 h-32 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200">
        <img
          :src="getImageUrl(user.image)"
          alt="Jeremy Nathan"
          class="w-full h-full object-cover"
          style="transform: scale(3); transform-origin: top; object-position: 50% 50%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import strapiService from '@/services/strapi'

export default {
  name: 'Title',
  data() {
    return {
      user: {},
      loading: true,
      error: null,
    }
  },

  methods: {
    async fetchUserData() {
      try {
        this.loading = true
        const response = await strapiService.getMe()
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
    this.user = await this.fetchUserData()
  },
}
</script>

<template>
  <div class="mt-16">
    <h2 class="text-2xl font-semibold mb-8">Experience</h2>
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-3.5 top-0 h-full w-px bg-border"></div>

      <!-- Timeline Items -->
      <div v-for="(item, index) in items" :key="index" class="relative mb-10 pl-8">
        <!-- Dot -->
        <div class="absolute left-0 w-2 h-2 rounded-full bg-foreground top-2"></div>

        <!-- Content -->
        <div class="grid grid-cols-[1fr_auto] gap-4 pl-4">
          <div class="space-y-2">
            <h3 class="text-lg font-medium">{{ item.title }}</h3>
            <p class="text-muted-foreground text-sm">{{ item.company }}</p>
            <p class="text-muted-foreground text-sm">{{ item.description }}</p>
            <div class="pt-1 flex flex-wrap gap-1.5">
              <span
                v-for="(tag, tagIndex) in item.tags"
                :key="tagIndex"
                class="text-xs px-2 py-0.5 bg-muted rounded-sm text-muted-foreground"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="text-sm text-muted-foreground whitespace-nowrap">
            {{ item.duration }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import strapiService from '@/services/strapi'

export default {
  name: 'Timeline',
  data() {
    return {
      items: [],
    }
  },

  methods: {
    async fetchJobsData() {
      try {
        this.loading = true
        const response = await strapiService.getJobs()
        return response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },

  async mounted() {
    this.items = await this.fetchJobsData()
  },
}
</script>

<style scoped>
/* Smooth animations */
.timeline-item {
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(5px);
}
</style>

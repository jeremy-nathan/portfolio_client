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
            {{ item.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      items: [
        {
          title: 'Senior Software Engineer',
          company: 'MoneyMatch Sdn Bhd, Malaysia',
          date: '2021 - Present',
          description:
            'Leading a team of developers to build scalable web applications using modern technologies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
          tags: [
            'PHP',
            'Laravel',
            'MySQL',
            'Node.js',
            'TypeScript',
            'AWS',
            'Git',
            'Docker',
            'Jira',
            'Trello',
            'DynamoDB',
            'Lambda',
            'System Design',
            'Code Review',
            'Code Refactoring',
            'SQL Optimization',
          ],
        },
        {
          title: 'Customer Assistant',
          company: 'Watsons Malaysua',
          date: '2017 - 2017',
          description: 'Bootlick customer unnecessarily but end up getting scolding from them',
          tags: ['Customer Experience'],
        },
      ],
    }
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

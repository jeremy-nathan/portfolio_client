<script setup>
import Title from '@/components/Title.vue'
import Timeline from '@/components/Timeline.vue'
import Project from '@/components/Project.vue'
</script>

<template>
  <div class="min-h-screen p-20 bg-gray-50">
    <div class="max-w-7xl mx-auto space-y-16">
      <Title />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Project v-for="n in 3" :key="n" />
      </div>
      <Timeline />
    </div>
  </div>
</template>

<style>
@import './index.css';
</style>

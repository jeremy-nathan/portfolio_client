<script setup>
import Title from '@/components/Title.vue'
import Timeline from '@/components/Timeline.vue'
import Project from '@/components/Project.vue'
</script>

<template>
  <div class="min-h-screen p-20 bg-gray-50">
    <div class="max-w-7xl mx-auto space-y-16">
      <Title />
      <Project />
      <Timeline />
    </div>
  </div>
</template>

<style>
@import './index.css';
</style>

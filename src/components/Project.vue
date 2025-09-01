<template>
  <div style="transform-style: preserve-3d">
    <CardContainer>
      <CardBody
        class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-5 sm:w-full dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
      >
        <CardItem :translate-z="50" class="text-lg font-bold text-neutral-600 dark:text-white">
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translate-z="60"
          class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem :translate-z="100" class="mt-3 w-full">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            class="h-56 w-full rounded-lg object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div class="mt-6 flex items-center justify-between">
          <CardItem
            :translate-z="20"
            as="a"
            href="https://github.com/your-username/your-repo"
            target="_blank"
            class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white flex items-center gap-2"
          >
            <img src="/github-mark.svg" alt="GitHub" class="w-4 h-4" />
            View on GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>
</template>

<script setup>
import { CardContainer, CardBody, CardItem } from '@/components/ui/card-3d'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
    <!-- Left Column (3/4 width on medium screens and up) -->
    <div class="md:col-span-3">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Jeremy Nathan</h1>
      <p class="text-gray-500 text-xl mb-4">Full-Stack Software Engineer</p>
      <p class="text-gray-700">
        Passionate about creating elegant solutions to complex problems through clean, efficient
        code.
      </p>
    </div>

    <!-- Right Column (1/4 width on medium screens and up) -->
    <div class="flex justify-center md:justify-end">
      <!-- Avatar Placeholder -->
      <div
        class="w-32 h-32 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
      >
        <svg
          class="w-3/4 h-3/4 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

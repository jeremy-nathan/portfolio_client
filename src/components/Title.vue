<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
    <!-- Left Column (3/4 width on medium screens and up) -->
    <div class="md:col-span-3">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Jeremy Nathan</h1>
      <p class="text-gray-500 text-xl mb-4">Full-Stack Software Engineer</p>
      <p class="text-gray-700 mb-4">
        Passionate about creating elegant solutions to complex problems through clean, efficient
        code.
      </p>
      <a
        href="tel:+60199700375"
        class="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 inline-flex items-center"
      >
        <span class="mr-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg> </span
        >+60 19 970 0375
      </a>
    </div>

    <!-- Right Column (1/4 width on medium screens and up) -->
    <div class="flex justify-center md:justify-end">
      <!-- Avatar -->
      <div class="w-32 h-32 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200">
        <img
          src="/avatar.jpeg"
          alt="Jeremy Nathan"
          class="w-full h-full object-cover"
          style="transform: scale(3); transform-origin: top; object-position: 50% 50%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

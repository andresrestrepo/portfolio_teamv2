<script>
  let {toggleTheme, isDarkMode} = $props()
</script>

<div class="relative">
  <div
    class=" fixed z-200 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-15 mt-10 grid place-items-center  rounded-xl transition duration-500 hover:scale-125"
  >
    <button
      onclick={toggleTheme}
      class=" relative w-16 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-between p-1 transition-colors duration-300 cursor-pointer "
      aria-label="Toggle dark mode"
    >
      <!-- Sliding indicator -->
      <span
        class="absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300"
        class:translate-x-8={isDarkMode}
        class:translate-x-0={!isDarkMode}
      ></span>

      <!-- Icons -->
      <span
        class="w-5 h-5 ml-0.5 text-yellow-500 i-lucide-sun"
        class:opacity-50={isDarkMode}
        class:opacity-100={!isDarkMode}
      ></span>

      <span
        class="w-5 h-5 text-blue-600 i-lucide-moon"
        class:opacity-100={isDarkMode}
        class:opacity-50={!isDarkMode}
      ></span>
    </button>
  </div>
</div>

<script>
  let { letter, next, description } = $props();
</script>

<div class="grid min-h-120 w-full grid-cols-2">
  <div
    class="flex items-center justify-center col-span-2 md:col-span-1 bg-gray-100 dark:bg-gray-800 dark:text-white"
  >
    <div class="text-8xl md:text-[12rem] font-serif font-extrabold">
      {letter}
    </div>
    {next}
  </div>

  <div
    class="flex items-center justify-center col-span-2 md:col-span-1 bg-teal-400 p-10 dark:bg-teal-700 dark:text-white"
  >
    <div class="text-2xl md:text-2xl lg:text-4xl text-white wid">
      {description}
    </div>
  </div>
</div>

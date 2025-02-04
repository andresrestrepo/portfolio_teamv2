
<script>
  import { fly } from "svelte/transition";

  let { x, y, letter, next, bglight, bgdark, onClick } = $props();


</script>

<button
  class="flex items-center justify-center bg-gray-{bglight} hover:bg-teal-200 hover:cursor-pointer dark:bg-gray-{bgdark} dark:text-white dark:hover:bg-teal-700 "
  in:fly={{ y: y, x: x }}
  onclick={() => onClick()}
>
  <div class="text-8xl md:text-[14rem] font-serif font-extrabold">{letter}</div>
  <div class="text-2xl font-sans">{next}</div>
</button>

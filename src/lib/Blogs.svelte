<script>
  import { fly } from "svelte/transition";
  import HeaderPage from "./util/HeaderPage.svelte";
</script>

<div in:fly={{ y: 300, x: -300 }}>
  <HeaderPage
    letter="b"
    next="logs"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, officia ipsum eum. Illo pariatur sapiente laborum quis accusamus eius doloribus necessitatibus!"
  ></HeaderPage>

  <section class="bg-white dark:bg-gray-900 min-h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Our Blogs
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          
        </p>
      </div>
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"></div>
    </div>
  </section>
</div>

<script>
  import { fade, fly, scale } from "svelte/transition";
  import { useZoomImageClick } from "@zoom-image/svelte";

  import HeaderPage from "./util/HeaderPage.svelte";
  import { PROJECTS } from "./data/projects";

  let openModal = $state(false);
  let selectedProject = $state();

  let projects = PROJECTS;

  let container = $state();
  const { createZoomImage } = useZoomImageClick();
</script>

<div in:fly={{ y: -300, x: 300 }}>
  <HeaderPage
    letter="p"
    next="rojects"
    description="We have enormous experience developing all types of projects in multiple technologies."
  ></HeaderPage>

  <section class="bg-white dark:bg-gray-900 min-h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Our Projects
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          Our Team of Expert Software Developers: Transforming Digital
          Landscapes
        </p>
      </div>
      <section
        id="projects"
        class="mb-20 animate-fade-in-up"
        style="animation-delay: 0.2s;"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each projects as project}
            <div
              class="bg-white dark:text-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105 transition-transform"
            >
              <h3 class="text-xl font-semibold mb-2">
                {project.name}
              </h3>
              <p class="mb-4">
                {project.summary}
              </p>
              <button
                onclick={() => {
                  selectedProject = project;
                  openModal = true;
                  setTimeout(() => {
                    if (project.image) {
                      createZoomImage(container);
                    }
                  }, 1000);
                }}
                class="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300 cursor-pointer"
                >View Project →</button
              >
            </div>
          {/each}
        </div>
      </section>
    </div>
  </section>
</div>

{#if openModal}
  <div
    class="relative z-100"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500/75 transition-opacity"
      aria-hidden="true"
    ></div>

    <div in:scale out:fade class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl dark:bg-gray-700 dark:text-white"
        >
          <div
            class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700 dark:text-white w-full"
          >
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <h3 class="text-xl font-semibold" id="modal-title">
                {selectedProject.name}
              </h3>
              <div class="mt-2">
                {#if selectedProject.image}
                  <div class="imageContainer" bind:this={container}>
                    <img
                      class="rounded-xl"
                      src={selectedProject.image}
                      alt={selectedProject.name}
                    />
                  </div>
                {/if}
                <p class="whitespace-pre-line mt-5">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              onclick={() => (openModal = false)}
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
              >Close</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

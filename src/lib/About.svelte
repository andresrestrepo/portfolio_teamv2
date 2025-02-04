<script>
  import { fly } from "svelte/transition";
  import HeaderPage from "./util/HeaderPage.svelte";
  import user from "/user.png";
  import { MEMBERS } from "./data/about";

  let members = MEMBERS
</script>

<div in:fly={{ y: -300, x: -300 }}>
  <HeaderPage
    letter="a"
    next="bout us"
    description="We are a dynamic team of software development professionals dedicated to creating innovative, robust, and scalable technological solutions."
  ></HeaderPage>
  <section class="bg-white dark:bg-gray-900 min-h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Our Team
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          Our Team of Expert Software Developers: Transforming Digital
          Landscapes
        </p>
      </div>
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {#each members as member}
          <div
            class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#top">
              <img
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={user}
                alt="Avatar"
              />
            </a>
            <div class="p-5">
              <h3
                class="text-xl font-bold tracking-tight text-gray-800 dark:text-white"
              >
                <a href="#top">{member.name}</a>
              </h3>
              <span class="text-gray-500 dark:text-gray-400">{member.role}</span
              >
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {member.description}
              </p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    aria-label="linkedin"
                    href="#top"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      ><path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      /></svg
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

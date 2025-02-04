<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  import About from "./lib/About.svelte";
  import HomeItem from "./lib/util/HomeItem.svelte";
  import ToggleTheme from "./lib/util/ToggleTheme.svelte";
  import Projects from "./lib/Projects.svelte";
  import Services from "./lib/Services.svelte";
  import Blogs from "./lib/Blogs.svelte";

  let visibleAbout = $state(false);
  let visibleProjects = $state(false);
  let visibleServices = $state(false);
  let visibleBlogs = $state(false);

  let isDarkMode = $state(false);

  function updateTheme() {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateTheme();
  }

  onMount(() => {
    isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    updateTheme();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        isDarkMode =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;

        updateTheme();
      });
  });
</script>

<main transition:fly={{ y: 200, duration: 1000 }}>
  {#if !visibleAbout && !visibleProjects && !visibleServices && !visibleBlogs}
    <div class="grid h-full w-full absolute grid-flow-col grid-rows-2">
      <HomeItem
        x="-300"
        y="-300"
        letter="a"
        next="bout us"
        bglight="200"
        bgdark="700"
        onClick={() => (visibleAbout = !visibleAbout)}
      ></HomeItem>

      <HomeItem
        x="-300"
        y="300"
        letter="s"
        next="ervices"
        bglight="100"
        bgdark="800"
        onClick={() => (visibleServices = !visibleServices)}
      ></HomeItem>

      <HomeItem
        x="300"
        y="-300"
        letter="p"
        next="rojects"
        bglight="100"
        bgdark="800"
        onClick={() => (visibleProjects = !visibleProjects)}
      ></HomeItem>

      <HomeItem
        x="300"
        y="300"
        letter="b"
        next="logs"
        bglight="200"
        bgdark="700"
        onClick={() => (visibleBlogs = !visibleBlogs)}
      ></HomeItem>
    </div>

    <ToggleTheme toggleTheme={() => toggleTheme()} {isDarkMode}></ToggleTheme>
  {/if}

  {#if visibleAbout || visibleProjects || visibleServices || visibleBlogs}
    <button
      class="bg-black fixed text-white z-[100] w-[60px] h-[60px] text-4xl text-center right-0 top-0 cursor-pointer transition duration-500 hover:rotate-180"
      onclick={() => {
        visibleAbout = false;
        visibleProjects = false;
        visibleServices = false;
        visibleBlogs = false;
      }}>X</button
    >
  {/if}

  {#if visibleAbout}
    <About></About>
  {/if}

  {#if visibleProjects}
    <Projects></Projects>
  {/if}

  {#if visibleServices}
    <Services></Services>
  {/if}

  {#if visibleBlogs}
    <Blogs></Blogs>
  {/if}
</main>

<style>
</style>

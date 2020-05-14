<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-1 bg-gray-200 px-4 pb-12">
        <h3 class="text-xl mb-4">Home</h3>

        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/your-collection">Your collection</nuxt-link>
          </li>
        </ul>
      </div>

      <div
        class="col-span-2 bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear"
      >
        <div class="mt-12">
          <div
            class="max-w-sm mx-auto flex p-6 bg-light-onSurfaceSecondary dark:bg-dark-onSurfaceSecondary rounded-lg shadow-xl"
          >
            <div class="flex-shrink-0"></div>
            <div class="ml-6 pt-1">
              <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
              <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
            </div>
          </div>

          <button
            class="relative overflow-hidden px-4 flex items-center bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary rounded-full h-10 outline-none text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
            type="button"
            @click="setCurrentTheme"
          >
            Theme
          </button>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'system'
          ? 'light'
          : this.$colorMode.preference === 'light'
          ? 'dark'
          : 'system';
    }
  }
};
</script>

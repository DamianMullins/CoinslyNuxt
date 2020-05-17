<template>
  <nav class="flex items-center justify-between flex-wrap light-surface dark:bg-dark-surface p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-10 mr-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 484.357 484.357"
      >
        <path
          d="M411.24 111.29c-45.443-26.168-105.483-40.58-169.061-40.58S118.561 85.122 73.118 111.29C25.967 138.441 0 174.991 0 214.206v57.032c0 39.171 25.983 75.537 73.162 102.398 45.316 25.801 105.341 40.011 169.017 40.011s123.701-14.21 169.017-40.011c47.179-26.862 73.162-63.228 73.162-102.398v-57.032c-.001-39.215-25.967-75.765-73.118-102.916zM83.597 129.488c42.306-24.361 98.624-37.778 158.581-37.778s116.276 13.416 158.581 37.778c40.367 23.245 62.597 53.331 62.597 84.718 0 31.208-22.199 60.891-62.508 83.58-42.093 23.693-98.443 36.742-158.671 36.742S125.601 321.48 83.508 297.786C43.199 275.097 21 245.415 21 214.206c0-31.386 22.23-61.473 62.597-84.718zm148.082 225.906v37.113c-24.905-.643-49.046-3.573-71.671-8.607v-36.524c22.779 4.693 46.888 7.417 71.671 8.018zm21 0c24.783-.601 48.892-3.326 71.671-8.018V383.9c-22.625 5.034-46.766 7.964-71.671 8.607v-37.113zM21.033 272.719c6.847 8.957 15.314 17.468 25.303 25.417v29.091c-16.132-16.76-24.874-35.352-25.303-54.508zm46.302 72.368v-32.436a227.798 227.798 0 005.872 3.435c19.474 10.961 41.705 19.794 65.8 26.305v36.1c-20.234-5.952-38.931-13.696-55.455-23.103a194.593 194.593 0 01-16.217-10.301zm333.47 10.3c-16.523 9.408-35.221 17.152-55.455 23.103v-36.1c24.095-6.51 46.327-15.343 65.8-26.305 2-1.126 3.948-2.275 5.872-3.435v32.436a193.748 193.748 0 01-16.217 10.301zm37.217-28.159v-29.091c9.988-7.949 18.456-16.46 25.303-25.417-.43 19.155-9.172 37.747-25.303 54.508z"
        />
        <path
          d="M265.59 307.911c88.966 0 158.656-41.36 158.656-94.159 0-5.799-4.701-10.5-10.5-10.5s-10.5 4.701-10.5 10.5c0 18.53-13.511 36.34-38.044 50.15-26.36 14.838-61.737 23.009-99.612 23.009-5.799 0-10.5 4.701-10.5 10.5s4.701 10.5 10.5 10.5zM77.845 224.252c5.799 0 10.5-4.701 10.5-10.5 0-44.387 70.603-81.886 154.174-81.886 5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5c-45.678 0-88.86 10.144-121.592 28.565-34.553 19.445-53.582 45.84-53.582 74.321 0 5.799 4.701 10.5 10.5 10.5z"
        />
      </svg>

      <span class="font-semibold text-3xl tracking-tight">Coinsly</span>
    </div>

    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-3 border rounded hover:text-white"
        @click="toggleMenu"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path v-if="!showMenu" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          <path
            v-else
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          ></path>
        </svg>
      </button>
    </div>

    <div
      :class="[
        'w-full block text-sm lg:flex lg:items-center lg:w-auto',
        {
          hidden: !showMenu
        }
      ]"
    >
      <button
        class="px-4 flex items-center block mt-4 mb-2 mr-4 lg:my-0 bg-gray-200 dark:bg-dark-elevatedSurface rounded-full h-10 outline-none text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
        @click="setCurrentTheme"
      >
        <span
          class="relative mr-2 overflow-hidden inline-block w-5 h-5 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 absolute"
          >
            <path
              v-if="isDarkTheme"
              d="M20.3542 15.3542L21.2821 15.7271C21.4314 15.3554 21.3446 14.9304 21.0613 14.6471C20.778 14.3639 20.353 14.277 19.9813 14.4264L20.3542 15.3542ZM8.64581 3.64587L9.57369 4.01876C9.72307 3.64704 9.6362 3.22204 9.35292 2.93877C9.06964 2.65549 8.64465 2.56861 8.27293 2.718L8.64581 3.64587ZM19.9813 14.4264C19.0613 14.7961 18.0557 15.0001 17 15.0001V17.0001C18.3155 17.0001 19.5739 16.7455 20.7271 16.2821L19.9813 14.4264ZM17 15.0001C12.5817 15.0001 9 11.4183 9 7.00006H7C7 12.5229 11.4772 17.0001 17 17.0001V15.0001ZM9 7.00006C9 5.94438 9.20396 4.93879 9.57369 4.01876L7.71794 3.27299C7.25452 4.42612 7 5.6846 7 7.00006H9ZM4 12.0001C4 8.6372 6.07526 5.75664 9.0187 4.57375L8.27293 2.718C4.59771 4.19496 2 7.79294 2 12.0001H4ZM12 20.0001C7.58172 20.0001 4 16.4183 4 12.0001H2C2 17.5229 6.47715 22.0001 12 22.0001V20.0001ZM19.4263 14.9814C18.2434 17.9248 15.3629 20.0001 12 20.0001V22.0001C16.2071 22.0001 19.8051 19.4024 21.2821 15.7271L19.4263 14.9814Z"
              fill="currentColor"
            ></path>
            <path
              v-else
              d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604M18.364 5.63609L17.6569 6.3432M6.3432 17.6569L5.63609 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <span class="inline-block font-medium mr-1">{{ themeCopy }}</span>
      </button>

      <nuxt-link
        class="block py-3 lg:my-0 lg:mr-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
        :to="{ name: 'index' }"
      >
        Home
      </nuxt-link>

      <nuxt-link
        class="block py-3 lg:my-0 lg:mr-4 light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        :to="{ name: 'your-collection' }"
      >
        Collection
      </nuxt-link>

      <template v-if="isAuthenticated">
        <button
          class="block py-3 lg:my-0 lg:mr-4 light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear font-medium"
          type="button"
          @click="logout"
        >
          Log out
        </button>

        <img class="rounded-full h-10" :src="photoUrl" :alt="email" />
      </template>

      <button
        v-else
        class="block py-3 lg:my-0 lg:mr-4 light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear font-medium"
        type="button"
        @click="login"
      >
        Log in
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    showMenu: false
  }),

  computed: {
    ...mapState('user', ['email', 'photoUrl']),

    ...mapGetters('user', ['isAuthenticated']),

    isDarkTheme() {
      return this.$colorMode.preference === 'dark';
    },

    themeCopy() {
      return this.isDarkTheme ? 'Dark' : 'Light';
    }
  },

  // watch: {
  //   isAuthenticated: {
  //     handler(val) {
  //       if (val) {
  //         this.$router.push('/about');
  //       }
  //     },
  //     immediate: true
  //   }
  // },

  methods: {
    ...mapActions('user', ['login', 'logout']),

    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    setCurrentTheme() {
      this.$colorMode.preference = this.isDarkTheme ? 'light' : 'dark';
    }
  }
};
</script>

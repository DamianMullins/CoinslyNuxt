<template>
  <div>
    <nui-header />
    <coin-filters v-if="isAuthenticated && hasCoins" />

    <main class="my-8">
      <nuxt keep-alive />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import nuiHeader from '@/components/partials/Header';
import CoinFilters from '@/components/partials/CoinFilters';

export default {
  components: {
    nuiHeader,
    CoinFilters
  },

  computed: {
    ...mapGetters('user', ['isAuthenticated']),

    ...mapGetters('coins', ['hasCoins'])
  },

  head: {
    script: [
      {
        src: `https://polyfill.io/v3/polyfill.min.js?features=${[
          'default',
          'IntersectionObserver'
        ].join('%2C')}`
      }
    ]
  }
};
</script>

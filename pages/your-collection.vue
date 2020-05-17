<template>
  <section class="container mx-auto">
    <h1 class="text-3xl pb-2 tracking-tight">Your collection</h1>

    <section class="flex flex-wrap items-center justify-between">
      <coin-detail v-for="coin in filteredCoins" :key="`coin_${coin.id}`" v-bind="coin" />
    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CoinDetail from '@/components/CoinDetail.vue';

export default {
  components: {
    CoinDetail
  },

  // middleware: 'auth',

  computed: mapGetters('coins', ['filteredCoins']),

  mounted() {
    this.getCoins();
    this.getOwnedCoins();
  },

  methods: mapActions('coins', ['getCoins', 'getOwnedCoins'])
};
</script>

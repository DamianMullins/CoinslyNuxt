<template>
  <section class="container mx-auto">
    <h1 class="text-5xl pb-2">Your collection</h1>

    <section class="flex flex-wrap items-center justify-between">
      <coin-detail v-for="coin in allCoins" :key="`coin_${coin.id}`" v-bind="coin" />
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CoinDetail from '@/components/CoinDetail.vue';

export default {
  components: {
    CoinDetail
  },

  middleware: 'auth',

  computed: mapState('coins', ['allCoins']),

  mounted() {
    this.getCoins();
    this.getOwnedCoins();
  },

  methods: mapActions('coins', ['getCoins', 'getOwnedCoins'])
};
</script>

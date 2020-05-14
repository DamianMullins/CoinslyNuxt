<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-1 bg-gray-200 px-4 pb-12">
        <h3 class="text-xl mb-4">Your collection</h3>

        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/your-collection">Your collection</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="col-span-2">
        <div class="mt-12">
          <h1 class="text-5xl pb-2">Your collection</h1>

          <div v-for="(coin, i) in allCoins" :key="`coin_${i}`">
            <h2>{{ coin.name }}</h2>

            <img :src="coin.imageUrl" :alt="coin.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  middleware: 'auth',

  computed: mapState('coins', ['allCoins']),

  mounted() {
    this.getCoins();
  },

  methods: mapActions('coins', ['getCoins'])
};
</script>

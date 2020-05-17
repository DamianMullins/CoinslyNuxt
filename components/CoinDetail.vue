<template>
  <button
    :class="[
      'p-8 mb-8 text-center scale-110:hover',
      {
        'disabled:opacity-75': isLoading
      }
    ]"
    :disabled="isLoading"
    @click="toggleOwned"
  >
    <img
      :src="imageUrl"
      :alt="name"
      :class="[
        'rounded-full mx-auto w-32 hover:opacity-100',
        {
          'border-4 border-nuxt-lightgreen': isOwned,
          'opacity-50 transition-opacity duration-300 ease-linear': !isOwned
        }
      ]"
    />
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true
    },

    order: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    imageUrl: {
      type: String,
      required: true
    },

    years: {
      type: Array,
      required: true
    },

    denomination: {
      type: String,
      required: true
    },

    mintage: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    isLoading: false
  }),

  computed: {
    ...mapState('coins', ['ownedCoins']),

    isOwned() {
      return this.ownedCoins.find(({ coinId }) => coinId === this.id) !== undefined;
    }
  },

  methods: {
    ...mapActions('coins', ['addOwnedCoin', 'removeOwnedCoin']),

    async toggleOwned() {
      this.isLoading = true;

      if (this.isOwned) {
        await this.removeOwnedCoin(this.id);
      } else {
        await this.addOwnedCoin(this.id);
      }

      this.isLoading = false;
    }
  }
};
</script>

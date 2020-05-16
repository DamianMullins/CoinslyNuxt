<template>
  <div class="p-8 text-center">
    <!-- <h2>{{ name }}</h2> -->

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

    <!-- <p>Owned: {{ isOwned }}</p>
    <p v-if="mintage">Mintage: {{ mintage }}</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

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

  computed: {
    ...mapState('coins', ['ownedCoins']),

    isOwned() {
      return this.ownedCoins[this.id] !== undefined;
    }
  }
};
</script>

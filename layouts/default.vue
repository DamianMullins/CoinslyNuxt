<template>
  <div>
    <nui-header />

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import nuiHeader from '@/components/partials/Header';

export default {
  components: {
    nuiHeader
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

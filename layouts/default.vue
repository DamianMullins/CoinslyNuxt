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
  }
};
</script>

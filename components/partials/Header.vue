<template>
  <header>
    <template v-if="isAuthenticated">
      <button type="button" @click="logout">
        Log out
      </button>

      <img
        :src="photoUrl"
        :alt="email"
        class="rounded-full h-12 w-12 flex items-center justify-center"
      />
    </template>

    <button v-else type="button" @click="login">
      Log in
    </button>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('user', ['email', 'photoUrl']),

    ...mapGetters('user', ['isAuthenticated'])
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

  methods: mapActions('user', ['login', 'logout'])
};
</script>

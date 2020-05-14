<template>
  <header>
    <template v-if="isUserAuthenticated">
      <button type="button" @click="logout">
        Log out
      </button>

      <img :src="photoUrl" :alt="email" />
    </template>

    <button v-else type="button" @click="login">
      Log in
    </button>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState('user', {
      email: ({ authUser }) => authUser.email,
      photoUrl: ({ authUser }) => authUser.photoUrl
    }),

    ...mapGetters('user', ['isUserAuthenticated'])
  },

  methods: {
    async login() {
      try {
        const GoogleAuthProvider = new this.$fireAuthObj.GoogleAuthProvider();
        await this.$fireAuth.signInWithPopup(GoogleAuthProvider);
      } catch (error) {}
    },

    async logout() {
      await this.$fireAuth.signOut();
    }
  }
};
</script>

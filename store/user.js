const USER_SET_DETAILS = 'USER_SET_DETAILS';

export const state = () => ({
  userId: '',
  displayName: '',
  email: '',
  photoUrl: ''
});

export const actions = {
  async login() {
    const GoogleAuthProvider = new this.$fireAuthObj.GoogleAuthProvider();
    await this.$fireAuth.signInWithPopup(GoogleAuthProvider);
  },

  async logout() {
    await this.$fireAuth.signOut();
    this.$router.push({ name: 'index' });
  },

  async onAuthStateChangedAction({ commit }, payload) {
    await commit(USER_SET_DETAILS, payload);
    this.$router.push({ name: 'your-collection' });
  }
};

export const mutations = {
  [USER_SET_DETAILS]: (state, { authUser }) => {
    const { uid = '', displayName = '', email = '', photoURL = '' } = authUser || {};

    state.userId = uid;
    state.displayName = displayName;
    state.email = email;
    state.photoUrl = photoURL;
  }
};

export const getters = {
  isAuthenticated: ({ userId }) => userId !== ''
};

export const state = () => ({
  authUser: {
    uid: '',
    displayName: '',
    email: '',
    photoUrl: ''
  }
});

export const actions = {
  onAuthStateChangedAction: ({ commit }, payload) => {
    commit('ON_AUTH_STATE_CHANGED_MUTATION', payload);
  }
};

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    const { uid = '', displayName = '', email = '', photoURL = '' } = authUser || {};

    state.authUser = {
      uid,
      displayName,
      email,
      photoUrl: photoURL
    };
  }
};

export const getters = {
  isUserAuthenticated: ({ authUser }) => authUser.uid !== ''
};

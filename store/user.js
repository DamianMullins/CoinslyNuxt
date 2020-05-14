export const state = () => ({
  userId: '',
  displayName: '',
  email: '',
  photoUrl: ''
});

export const actions = {
  onAuthStateChangedAction: ({ commit }, payload) => {
    commit('ON_AUTH_STATE_CHANGED_MUTATION', payload);
  }
};

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    const { uid = '', displayName = '', email = '', photoURL = '' } = authUser || {};

    state.userId = uid;
    state.displayName = displayName;
    state.email = email;
    state.photoUrl = photoURL;
  }
};

export const getters = {
  isUserAuthenticated: ({ userId }) => userId !== ''
};

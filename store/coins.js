const COINS_ADD_ALL = 'COINS_ADD_ALL';
const COINS_ADD_OWNED = 'COINS_ADD_OWNED';

export const state = () => ({
  allCoins: {},
  ownedCoins: {}
});

export const actions = {
  async getCoins({ commit, getters }) {
    if (getters.hasCoins) return;

    const coinsRef = await this.$fireStore.collection('coins').orderBy('order').get();
    const coins = {};

    coinsRef.forEach(coin => {
      const { id } = coin;
      const coinData = coin.data();

      coins[id] = {
        id,
        ...coinData
      };
    });

    commit(COINS_ADD_ALL, coins);
  },

  async getOwnedCoins({ commit, getters, rootState }) {
    if (getters.hasOwnedCoins) return;

    const { userId } = rootState.user;

    const ownedRef = await this.$fireStore.collection('owned').where('userId', '==', userId).get();
    const ownedCoins = {};

    ownedRef.forEach(owned => {
      const { id } = owned;
      const ownedData = owned.data();

      ownedCoins[ownedData.coinId] = {
        id,
        ...ownedData
      };
    });

    commit(COINS_ADD_OWNED, ownedCoins);
  }
};

export const mutations = {
  [COINS_ADD_ALL]: (state, allCoins) => {
    state.allCoins = allCoins;
  },

  [COINS_ADD_OWNED]: (state, ownedCoins) => {
    state.ownedCoins = ownedCoins;
  }
};

export const getters = {
  hasCoins: ({ allCoins }) => !Object.keys(allCoins).length === 0,

  hasOwnedCoins: ({ ownedCoins }) => !Object.keys(ownedCoins).length === 0
};

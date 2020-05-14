const COINS_ADD_ALL = 'COINS_ADD_ALL';

export const state = () => ({
  allCoins: {},
  allCoinsList: []
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
  }
};

export const mutations = {
  COINS_ADD_ALL: (state, allCoins) => {
    state.allCoins = allCoins;
  }
};

export const getters = {
  hasCoins: ({ allCoins }) => !Object.keys(allCoins).length === 0
};

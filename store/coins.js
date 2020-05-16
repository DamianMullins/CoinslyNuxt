const COINS_ADD_ALL = 'COINS_ADD_ALL';
const COINS_ADD_ALL_OWNED = 'COINS_ADD_ALL_OWNED';
const COINS_ADD_OWNED = 'COINS_ADD_OWNED';
const COINS_REMOVE_OWNED = 'COINS_REMOVE_OWNED';

export const state = () => ({
  allCoins: [],
  ownedCoins: []
});

export const actions = {
  async getCoins({ commit }) {
    const coinsRef = await this.$fireStore.collection('coins').orderBy('order').get();
    const coins = [];

    coinsRef.forEach(coin => {
      const { id } = coin;
      const coinData = coin.data();

      coins.push({
        id,
        ...coinData
      });
    });

    commit(COINS_ADD_ALL, coins);
  },

  async getOwnedCoins({ commit, rootState: { user } }) {
    const { userId } = user;

    const ownedRef = await this.$fireStore.collection('owned').where('userId', '==', userId).get();
    const ownedCoins = [];

    ownedRef.forEach(owned => {
      const { userId, coinId } = owned.data();

      ownedCoins.push({ userId, coinId });
    });

    commit(COINS_ADD_ALL_OWNED, ownedCoins);
  },

  async addOwnedCoin({ commit, rootState: { user } }, coinId) {
    const { userId } = user;

    await this.$fireStore.collection('owned').add({ userId, coinId });

    commit(COINS_ADD_OWNED, {
      userId,
      coinId
    });
  },

  async removeOwnedCoin({ commit, rootState }, coinId) {
    const { userId } = rootState.user;

    const ownedRef = await this.$fireStore
      .collection('owned')
      .where('userId', '==', userId)
      .where('coinId', '==', coinId)
      .get();

    ownedRef.forEach(o => o.ref.delete());

    commit(COINS_REMOVE_OWNED, coinId);
  }
};

export const mutations = {
  [COINS_ADD_ALL]: (state, allCoins) => {
    state.allCoins = allCoins;
  },

  [COINS_ADD_ALL_OWNED]: (state, ownedCoins) => {
    state.ownedCoins = ownedCoins;
  },

  [COINS_ADD_OWNED]: (state, ownedCoin) => {
    state.ownedCoins.push(ownedCoin);
  },

  [COINS_REMOVE_OWNED]: (state, coinId) => {
    state.ownedCoins = state.ownedCoins.filter(o => o.coinId !== coinId);
  }
};

export const getters = {
  hasCoins: ({ allCoins }) => allCoins.length > 0,

  hasOwnedCoins: ({ ownedCoins }) => ownedCoins.length > 0
};

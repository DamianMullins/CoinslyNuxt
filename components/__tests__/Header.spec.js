import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Header from '@/components/partials/Header.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const createStore = ({
  userId,
  displayName,
  email,
  photoUrl,
  onAuthStateChangedAction = jest.fn(),
  isAuthenticated = false
} = {}) =>
  new Vuex.Store({
    modules: {
      user: {
        namespaced: true,
        state: { userId, displayName, email, photoUrl },

        actions: {
          onAuthStateChangedAction
        },

        getters: {
          isAuthenticated: () => isAuthenticated
        }
      }
    }
  });

describe('Header', () => {
  test('is a Vue instance', () => {
    // Arrange
    const store = createStore();

    // Act
    const wrapper = shallowMount(Header, {
      localVue,
      store
    });

    // Assert
    expect(wrapper).toBeDefined();
  });
});

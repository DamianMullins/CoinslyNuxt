<template>
  <nav
    class="flex items-center justify-center flex-wrap bg-light-elevatedSurface dark:bg-dark-elevatedSurface p-6"
  >
    <div class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary">
      <p class="block uppercase tracking-wide text-xs font-bold mb-2" for="filter-denomination">
        Status
      </p>

      <div class="flex border border-dark-surface rounded overflow-hidden">
        <label
          v-for="status in statuses"
          :key="`status_${status}`"
          :class="[
            'px-4 py-2 h-10 hover:bg-light-surface dark:hover:bg-dark-surface',
            {
              'bg-light-surface dark:bg-dark-surface': status === statusFilter
            }
          ]"
        >
          {{ status }}

          <input
            v-model="s"
            type="radio"
            name="filter"
            :value="status"
            class="hidden"
            @change="updateFilters"
          />
        </label>
      </div>
    </div>

    <div class="ml-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary">
      <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="filter-denomination">
        Denomination
      </label>

      <div class="relative">
        <select
          id="filter-denomination"
          v-model="d"
          class="block appearance-none w-full bg-light-elevatedSurface dark:bg-dark-elevatedSurface border border-dark-surface px-4 py-2 pr-8 h-10 rounded leading-tight focus:outline-none focus:shadow-outline"
          @change="updateFilters"
        >
          <option v-for="denomination in denominations" :key="`denomination_${denomination}`">
            {{ denomination }}
          </option>
        </select>

        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    s: '', // status
    d: '' // denominations
  }),

  computed: {
    ...mapState('coins', ['statusFilter', 'statuses']),

    ...mapGetters('coins', ['denominations'])
  },

  mounted() {
    this.s = this.$route.query.s || this.statuses[0];
    this.d = this.$route.query.d || this.denominations[0];

    this.updateFilters();
  },

  methods: {
    ...mapActions('coins', ['setFilters']),

    updateFilters() {
      this.setFilters({ status: this.s, denomination: this.d });

      this.$router.push({ query: { s: this.s, d: this.d } });
    }
  }
};
</script>

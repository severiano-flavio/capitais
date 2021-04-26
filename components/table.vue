<template>
  <v-data-table
    :headers="titles"
    :items="items"
    item-key="name"
    :items-per-page="20"
    :search="search"
    class="elevation-1"
  >
    <template #[`item.name`]="{ item }">
      <a :href="item.flag" target="_blank">
        <img :src="item.flag" class="flag-icon" />
      </a>
      <span>{{ item.name }}</span>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  name: 'table',
  components: {},
  props: {
    items: {
      type: Array,
      required: true,
    },
    perpage: {
      type: Number,
      default: 20,
    },
    search: {
      type: String,
    },
    titles: {
      type: Array,
      required: true,
    },
  },
})
export default class Table extends Vue {
  /**
   * Data
   */
  /**
   * Propriedades Computáveis
   */
  /**
   * Métodos
   */
}
</script>

<style lang="scss">
.v-data-table-header {
  background-color: rgba(22, 5, 255, 0.068);
  font-weight: 700;

  th {
    font-size: 1.2rem !important;
    padding: 0.6rem 0 !important;
  }
}
tr {
  td {
    padding: 0.6rem 1rem !important;
  }
}
.flag-icon {
  width: 1.5rem;
  height: auto;
  margin: 0 1rem;
}
</style>

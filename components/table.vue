<template>
  <v-data-table
    :headers="titles"
    :items="items"
    :items-per-page="20"
    class="elevation-1"
  ></v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  name: 'table',
  components: {},
  props: {
    titles: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    perpage: {
      type: Number,
      default: 20,
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

<style lang="scss" scoped></style>

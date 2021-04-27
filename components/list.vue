<template>
  <v-card class="mx-auto" min-width="200" max-width="400" elevation="3" tile>
    <v-card-title class="blue-grey darken-3 justify-center px-2 py-2">
      <div class="white--text">Capitais</div>
    </v-card-title>
    <v-list disabled>
      <v-list-item-group v-if="items.length > 0" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title class="text-center" v-text="item.capital" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CountryTypes } from '~/types'
@Component({
  name: 'list',
  components: {},
})
export default class Table extends Vue {
  @Prop({
    default() {
      return [{ capital: '' }]
    },
  })
  items!: Array<CountryTypes>
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
</style>

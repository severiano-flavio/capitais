<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list dense>
      <v-subheader>Capitais</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.capital"></v-list-item-title>
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
  @Prop({ required: true }) items!: Array<CountryTypes>
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

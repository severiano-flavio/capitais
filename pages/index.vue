<template>
  <div>
    <v-text-field
      label="Pesquisar País ou capital"
      v-model="search"
    ></v-text-field>
    <v-col cols="12 ml-10">
      <v-card class="mx-auto">
        <v-row>
          <v-col cols="4" lg="4" sm="12" xs="12">
            <Table
              v-if="filterCountry.list1.length > 0"
              :titles="headers"
              :items="filterCountry.list1"
              :perpage="20"
            />
          </v-col>
          <v-col cols="4" lg="4" sm="12" xs="12">
            <Table
              :titles="headers"
              :items="filterCountry.list2"
              :perpage="20"
            />
          </v-col>
          <v-col cols="4" lg="4" sm="12" xs="12">
            <Table
              :titles="headers"
              :items="filterCountry.list3"
              :perpage="20"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Table from '@/components/table.vue'
@Component({
  name: 'Home',
  components: {
    Table,
  },
  data: () => {
    return {}
  },
})
export default class Home extends Vue {
  mounted() {
    this.$store.dispatch('getCountry')
  }

  /**
   * Data
   */

  private headers = [
    {
      text: 'Country',
      align: 'start',
      value: 'name',
    },
    { text: 'Capital', align: 'start', value: 'capital' },
  ]

  private search = ''
  /**
   * Propriedades Computáveis
   */

  get filterCountry() {
    const getter = this.$store.getters
    const lists = {
      list1: getter.getList1,
      list2: getter.getList2,
      list3: getter.getList1,
    }
    return lists
  }

  get stateCountry() {
    return this.$store.state.country
  }
  /**
   * Métodos
   */
}
</script>

<style lang="scss" scoped></style>

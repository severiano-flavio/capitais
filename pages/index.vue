<template>
  <v-app class="teste">
    <v-main class="app-bg">
      <v-col cols="11 ml-10">
        <v-card class="mx-auto px-8">
          <v-col cols="12">
            <v-row>
              <v-col cols="8">
                <v-row class="row-container">
                  <span class="mr-2">Filtro:</span>
                  <input
                    v-model="search"
                    type="text"
                    label="Solo"
                    class="row-input"
                  />
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row class="row-container">
                  <span class="mr-2 row-text">Ordenação:</span>
                  <v-col cols="6 col-custom-container">
                    <v-select
                      v-model="sort"
                      :items="items"
                      height="20"
                      dense
                      solo
                    ></v-select>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-row>
            <v-col>
              <list :items="list1" />
            </v-col>
            <v-col>
              <list :items="list2" />
            </v-col>
            <v-col>
              <list :items="list3" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import List from '@/components/list.vue'
import { CountryTypes } from '~/types'
@Component({
  name: 'Home',
  components: {
    List,
  },
})
export default class Home extends Vue {
  mounted() {
    this.$store.dispatch('getCountry')
  }

  /**
   * Data
   */
  private items = ['A-Z', 'Z-A']

  private search = ''

  private sort = 'A-Z'

  /**
   * Propriedades Computáveis
   */

  /**
   * Computed properties  que recebem o Getter com 1/3 da lista original da State
   * Função recebe 2 parâmetros
   * @param 1 é @type {String} que será utilizada para realizar a pesquisa
   * @param 2 é @type {String} que decidirá a ordem da lista @example "A-Z"
   * @return {CountryTypes[]}
   */
  get list1(): CountryTypes[] {
    return this.$store.getters.getList1(this.search, this.sort)
  }

  get list2(): CountryTypes[] {
    return this.$store.getters.getList2(this.search, this.sort)
  }

  get list3(): CountryTypes[] {
    return this.$store.getters.getList3(this.search, this.sort)
  }
}
</script>

<style lang="scss">
.app-bg {
  background-color: rgba($color: #eeeeee, $alpha: 1);
}
.row-container {
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  .row-input {
    width: 15rem;
    font-size: 1.1rem;
    line-height: 1.5;
    border: 1px solid rgb(185, 185, 185);
    outline: none;
  }
  .row-text {
    margin-bottom: 7%;
  }
}
.text-container {
  margin-left: auto;
  margin-right: auto;
}
.col-custom-container {
  padding: 0;
}
</style>

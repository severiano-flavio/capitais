<template>
  <v-app class="teste">
    <v-main class="app-bg">
      <v-col cols="11 ml-10">
        <v-card class="mx-auto px-8 py-8">
          <v-col cols="12">
            <v-row class="row-container justify-space-between">
              <div>
                <span class="mr-2 font-weight-medium">Filtro:</span>
                <input
                  v-model="search"
                  type="text"
                  label="Solo"
                  class="row-input"
                />
              </div>
              <div>
                <div class="d-flex text-center">
                  <span class="mr-2 align-self-center font-weight-medium"
                    >Ordenação:</span
                  >
                  <div class="row-container-select">
                    <v-select
                      v-model="sort"
                      class="mt-2 mb-n5"
                      :items="items"
                      height="20"
                      dense
                      solo
                    />
                  </div>
                </div>
              </div>
            </v-row>
          </v-col>
          <v-row class="mt-5">
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
import { mapActions, mapGetters } from 'vuex'
import List from '@/components/list.vue'
import { CountryTypes } from '~/types'
@Component({
  name: 'Home',
  components: {
    List,
  },
  computed: {
    ...mapActions({
      getCountry: 'getCountry',
    }),
    ...mapGetters({
      getList1: 'getList1',
      getList2: 'getList2',
      getList3: 'getList3',
    }),
  },
})
export default class Home extends Vue {
  // Declarando variáveis que serão instanciadas do Vuex
  getList1: any
  getList2: any
  getList3: any
  getCountry!: () => any

  mounted() {
    // eslint-disable-next-line no-unused-expressions
    this.getCountry
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
   * Computed properties que inclui scape em string caracteres especiais
   * Evita erro no Regex
   * @returns {string}
   */
  get regexSearch(): string {
    return this.search.replace(/([^a-zA-Z0-9_-\s])/g, '\\$1')
  }

  /**
   * Computed properties  que recebem o Getter com 1/3 da lista original da State
   * Função recebe 2 parâmetros
   * @method getList está em @method mapGetters que está em @Component
   * @param 1 é @type {String} que será utilizada para realizar a pesquisa
   * @param 2 é @type {String} que decidirá a ordem da lista @example "A-Z"
   * @returns {CountryTypes[]}
   */
  get list1(): CountryTypes[] {
    return this.getList1(this.regexSearch, this.sort)
  }

  get list2(): CountryTypes[] {
    return this.getList2(this.regexSearch, this.sort)
  }

  get list3(): CountryTypes[] {
    return this.getList3(this.regexSearch, this.sort)
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
  .row-container-select {
    width: 150px;
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

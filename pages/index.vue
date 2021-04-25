<template>
  <div>
    <v-col cols="12 ml-10">
      <v-card class="mx-auto">
        <v-col cols="10 text-container">
          <v-text-field
            label="Realize a pesquisa por País, capital ou idioma"
            v-model="search"
            append-icon="mdi-magnify"
            class="mx-auto"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col>
            <custom-table
              :titles="headers"
              :items="stateCountry"
              :perpage="20"
              :search="search"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CustomTable from '@/components/table.vue'
import { CountryTypes } from '~/types'
@Component({
  name: 'Home',
  components: {
    CustomTable,
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

  /**
   * a variável @headers constrói os elementos da tabela,
   * cada objeto de @headers representa uma coluna da tabela,
   * @value é o nome do parâmetro do objeto que será preenchido na coluna da tabela
   */
  private headers = [
    {
      text: 'Países',
      value: 'name',
    },
    { text: 'Capitais', value: 'capital' },
    { text: 'Idiomas', value: 'language' },
  ]

  private search = ''
  /**
   * Propriedades Computáveis
   */

  /**
   * A função recebe os valores da state
   */
  get stateCountry(): CountryTypes {
    console.log(this.$store.state.country)
    return this.$store.state.country
  }
  /**
   * Métodos
   */
}
</script>

<style lang="scss">
.text-container {
  margin-left: auto;
  margin-right: auto;
}
</style>

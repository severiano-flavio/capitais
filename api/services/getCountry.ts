import { axios } from '@/api/index'

/**
 * A Função faz uma requisição para obter uma lista de países.
 *
 * @const response Espera a Promise ser concluída.
 * @type {object}
 * @return {object} Json com a lista de países.
 */

export async function responseCountry() {
  try {
    const response = await axios.get('https://restcountries.eu/rest/v2/all')
    return response
  } catch (err) {
    throw new Error(err.message)
  }
}

import Axios from 'axios'

/**
 * @constant axios cria uma instância que pode ser escalonada.
 */
export const axios = Axios.create({
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // },
})

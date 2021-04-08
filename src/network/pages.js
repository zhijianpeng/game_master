import axios from 'axios'

export function get_tixiantongji() {
    return axios.post(
      "http://localhost:8080/tixiantongji"
    )
  }
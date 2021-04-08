import axios from 'axios'

export function getLeftBar() {
    return axios.post(
      "http://localhost:8080/left"
    )
  }
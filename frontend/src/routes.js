const API_URL = window.location.origin.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://ip-lookup-api.herokuapp.com'

export default {
  API: API_URL,

  IP_INFOS: API_URL + '/api/ips',
}
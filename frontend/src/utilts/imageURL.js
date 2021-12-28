export const getCountryFlag = (ip_info) => {
  if (`../images/flags/${ip_info?.country_code?.toLowerCase()}.png`) {
    return `../images/flags/${ip_info?.country_code?.toLowerCase()}.png`
  }
  else {
    return `../images/flags/_unitednations.png`
  }
}

import IpInfoActionTypes from '../action-types'

export const ipInfoReducer = (state = [], action) => {
  switch (action.type) {
    case IpInfoActionTypes.FETCH_IP_INFOS:
      return action.ip_infos
    case IpInfoActionTypes.CREATE_IP_INFO:
      return [action.ip_info, ...state]
    case IpInfoActionTypes.DELETE_IP_INFO:
      return state.filter((ip_info) => ip_info.id !== action.id)
    default:
      return state
  }
}

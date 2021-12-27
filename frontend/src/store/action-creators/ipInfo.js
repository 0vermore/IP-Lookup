import axios from 'axios'
import IpInfoActionTypes from '../action-types'
import { toastError } from '../../utilts/toast'
import ROUTES from '../../routes'

export const fetchIpInfos = () => {
    return async (dispatch) => {
        await axios
            .get(ROUTES.IP_INFOS)
            .then((response) => {
                dispatch({ type: IpInfoActionTypes.FETCH_IP_INFOS, ip_infos: response.data })
            })
            .catch((error) => toastError(error.message))
    }
}

export const createIpInfo = (ip) => {
    return async (dispatch) => {
        await axios
            .post(ROUTES.IP_INFOS, { ip: ip })
            .then((response) => {
                console.log(response.data)
                dispatch({ type: IpInfoActionTypes.CREATE_IP_INFO, ip_info: response.data })
            })
            .catch((error) => toastError(error.message))
    }
}

export const deleteIpInfo = (index) => {
    return async (dispatch) => {
        await axios
            .delete(ROUTES.IP_INFOS + `/${index}`)
            .then(() => {
                dispatch({ type: IpInfoActionTypes.DELETE_IP_INFO, index: index })
            })
            .catch((error) => toastError(error.message))
    }
}
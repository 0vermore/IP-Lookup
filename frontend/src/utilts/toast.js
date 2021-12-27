import { toast } from 'react-toastify'

export const toastError = (message) => {
  console.log(message)
  return (
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
  })
  )
}
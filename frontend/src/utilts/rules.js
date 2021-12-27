export const rules = {
    required: (message = 'Required') => ({
        required: true,
        message
    }),
    ipv4Validation: () => ({
      validator(_, value) {
        let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        if(value.match(ipformat)){
          return Promise.resolve()
        }
          return Promise.reject(new Error('Invalid IPv4 address!'))
      }
    }
  )
}
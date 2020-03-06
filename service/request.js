import Api from 'wx-axios-promise'

let baseURL = 'http://localhost:8090'
// if (process.env.NODE_ENV === 'development')
//   baseURL = 'http://localhost:8080'
// else baseURL = 'https://www.joinintern.cn'

const base = Api().create({
  url: baseURL,
  timeout: 1000 * 60 * 10
})

base.interceptors.response.use(
  res => {
    if (res.statusCode === 200) return res.data
    else return Promise.reject(res.status)
  },
  err => {
    return Promise.reject(err)
  }
)

function parseQuery(arg) {
  let append = '?'
  for (let item in arg) {
    if (arg[item]) {
      append += `${item}=${arg[item]}&`
    }
  }
  return append
}

export const service = {
  async post(url, body, config) {
    if (arguments.length === 2) return base.post(url + parseQuery(body.params))
    else return base.post(url + parseQuery(config.params), body)
  },

  async delete(url, body, config) {
    if (arguments.length === 2)
      return base.delete(url + parseQuery(body.params))
    else return base.delete(url + parseQuery(config.params), body)
  },

  async put(url, body, config) {
    if (arguments.length === 2) return base.put(url + parseQuery(body.params))
    else return base.put(url + parseQuery(config.params), body)
  },

  get(url, config) {
    return base.get(url + parseQuery(config.params))
  }
}

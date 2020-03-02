import { service } from './request'

export class LabelController {
  static getLabels() {
    let data = {}
    return service.get('/label/get', { params: data })
  }

  static addLabel(user_id, name) {
    let data = { user_id: user_id, name: name }
    return service.post('/label/add', { params: data })
  }

  static getPostLabels(id) {
    let data = { id: id }
    return service.get('/label/get-post', { params: data })
  }
}

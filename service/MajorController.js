import { service } from './request'

export class MajorController {
  static getAllMajor() {
    let data = {}
    return service.get('/major/get', { params: data })
  }

  static addMajor(id, name) {
    let data = { id: id, name: name }
    return service.post('/major/add', { params: data })
  }
}

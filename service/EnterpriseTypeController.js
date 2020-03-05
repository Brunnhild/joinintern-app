import { service } from './request'
export class EnterpriseTypeController {
  static getAllType() {
    let data = {}
    return service.get('/enterprise-type/get', { params: data })
  }
  static addType(id, name) {
    let data = { id: id, name: name }
    return service.post('/enterprise-type/add', { params: data })
  }
}

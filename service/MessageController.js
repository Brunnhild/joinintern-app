import { service } from './request'

export class MessageController {
  static getMessage(user_id) {
    let data = { user_id: user_id }
    return service.post('/message/get', { params: data })
  }
}

import { service } from './request'
export class ChatController {
  static status(uid) {
    let data = { uid: uid }
    return service.post('/chatting/status', { params: data })
  }
  static fetch(offset, uid) {
    let data = { offset: offset, uid: uid }
    return service.post('/chatting/fetch', { params: data })
  }
}

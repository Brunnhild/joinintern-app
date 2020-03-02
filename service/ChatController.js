import { service } from './request'

export class ChatController {
  static status(uid) {
    let data = { uid: uid }
    return service.post('/chatting/status', { params: data })
  }

  static fetch(uid, offset) {
    let data = { uid: uid, offset: offset }
    return service.post('/chatting/fetch', { params: data })
  }
}

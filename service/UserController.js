import { service } from './request'

export class UserController {
  static getAllUser() {
    let data = {}
    return service.post('/user/get', { params: data })
  }

  static query(user_id) {
    let data = { user_id: user_id }
    return service.get('/user/query', { params: data })
  }

  static find(uid) {
    let data = { uid: uid }
    return service.post('/user/find', { params: data })
  }

  static superLogin(uid, password) {
    let data = { uid: uid, password: password }
    return service.post('/user/super/login', { params: data })
  }

  static getAdmin() {
    let data = {}
    return service.post('/user/admin/get', { params: data })
  }

  static getOpenId(code) {
    let data = { code: code }
    return service.post('/user/openid', { params: data })
  }

  static login(code, nickname, avatar) {
    let data = { code: code, nickname: nickname, avatar: avatar }
    return service.post('/user/login', { params: data })
  }

  static register(
    code,
    stuId,
    gender,
    level,
    major,
    cardPhotoPath,
    nickname,
    avatar,
    enterpriseTypeId
  ) {
    let data = {
      code: code,
      stuId: stuId,
      gender: gender,
      level: level,
      major: major,
      cardPhotoPath: cardPhotoPath,
      nickname: nickname,
      avatar: avatar,
      enterpriseTypeId: enterpriseTypeId
    }
    return service.post('/user/register', { params: data })
  }

  static validateUser(id, op) {
    let data = { id: id, op: op }
    return service.post('/user/validate', { params: data })
  }

  static updateInformation(gender, level, major, enterpriseTypeId, id) {
    let data = {
      gender: gender,
      level: level,
      major: major,
      enterpriseTypeId: enterpriseTypeId,
      id: id
    }
    return service.post('/user/update', { params: data })
  }

  static grantAdminPrivileges(admin_id, open_id) {
    let data = { admin_id: admin_id, open_id: open_id }
    return service.post('/user/admin/grant', { params: data })
  }
}

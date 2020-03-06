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
  static superLogin(password, uid) {
    let data = { password: password, uid: uid }
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
  static login(avatar, code, nickname) {
    let data = { avatar: avatar, code: code, nickname: nickname }
    return service.post('/user/login', { params: data })
  }
  static register(
    code,
    file,
    stuId,
    avatar,
    description,
    enterpriseTypeId,
    gender,
    level,
    major,
    nickname
  ) {
    let formdata = new FormData()
    formdata.append('code', code)
    formdata.append('file', file)
    formdata.append('stuId', stuId)
    formdata.append('avatar', avatar)
    formdata.append('description', description)
    formdata.append('enterpriseTypeId', enterpriseTypeId)
    formdata.append('gender', gender)
    formdata.append('level', level)
    formdata.append('major', major)
    formdata.append('nickname', nickname)
    return service.post('/user/register', formdata)
  }
  static validateUser(id, op) {
    let data = { id: id, op: op }
    return service.post('/user/validate', { params: data })
  }
  static updateInformation(id, enterpriseTypeId, gender, level, major) {
    let data = {
      id: id,
      enterpriseTypeId: enterpriseTypeId,
      gender: gender,
      level: level,
      major: major
    }
    return service.post('/user/update', { params: data })
  }
  static grantAdminPrivileges(admin_id, open_id) {
    let data = { admin_id: admin_id, open_id: open_id }
    return service.post('/user/admin/grant', { params: data })
  }
  static grantGra(admin_id, open_id) {
    let data = { admin_id: admin_id, open_id: open_id }
    return service.post('/user/gra', { params: data })
  }
  static graList() {
    let data = {}
    return service.post('/user/graList', { params: data })
  }
}

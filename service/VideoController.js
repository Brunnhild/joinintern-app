import { service } from './request'
export class VideoController {
  static query(videoId) {
    let data = { videoId: videoId }
    return service.post('/video/query', { params: data })
  }
  static delete(id, uid) {
    let data = { id: id, uid: uid }
    return service.post('/video/delete', { params: data })
  }
  static getAllVideos() {
    let data = {}
    return service.post('/video/get', { params: data })
  }
  static getValidate() {
    let data = {}
    return service.post('/video/get/validate', { params: data })
  }
  static testFetch(url) {
    let data = { url: url }
    return service.post('/video/test', { params: data })
  }
  static uploadVideo(file, thumb, userId, videoDescription, videoTitle) {
    let formdata = new FormData()
    formdata.append('file', file)
    formdata.append('thumb', thumb)
    formdata.append('userId', userId)
    formdata.append('videoDescription', videoDescription)
    formdata.append('videoTitle', videoTitle)
    return service.post('/video/upload', formdata)
  }
  static updateVideo(id, user_id, videoDescription, videoTitle) {
    let data = {
      id: id,
      user_id: user_id,
      videoDescription: videoDescription,
      videoTitle: videoTitle
    }
    return service.post('/video/update', { params: data })
  }
  static validateVideo(id, pass, user_id) {
    let data = { id: id, pass: pass, user_id: user_id }
    return service.post('/video/validate', { params: data })
  }
  static hitVideo(id, user_id) {
    let data = { id: id, user_id: user_id }
    return service.post('/video/hit', { params: data })
  }
  static getHits(videoId) {
    let data = { videoId: videoId }
    return service.post('/video/hits', { params: data })
  }
  static fav(uid, videoId) {
    let data = { uid: uid, videoId: videoId }
    return service.post('/video/fav', { params: data })
  }
  static favoured(uid) {
    let data = { uid: uid }
    return service.post('/video/favoured', { params: data })
  }
  static cancelFav(uid, videoId) {
    let data = { uid: uid, videoId: videoId }
    return service.delete('/video/cancelFav', { params: data })
  }
  static isFav(uid, videoId) {
    let data = { uid: uid, videoId: videoId }
    return service.post('/video/isFav', { params: data })
  }
  static history(uid) {
    let data = { uid: uid }
    return service.post('/video/history', { params: data })
  }
}

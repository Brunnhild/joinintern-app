import { service } from './request'

export class VideoController {
  static query(videoId) {
    let data = { videoId: videoId }
    return service.post('/video/query', { params: data })
  }

  static delete(uid, id) {
    let data = { uid: uid, id: id }
    return service.post('/video/delete', { params: data })
  }

  static getAllVideos() {
    let data = {}
    return service.post('/video/get', { params: data })
  }

  static testFetch(url) {
    let data = { url: url }
    return service.post('/video/test', { params: data })
  }

  static uploadVideo(file, videoTitle, videoDescription, userId) {
    let formdata = new FormData()
    formdata.append('file', file)
    formdata.append('videoTitle', videoTitle)
    formdata.append('videoDescription', videoDescription)
    formdata.append('userId', userId)
    return service.post('/video/upload', formdata)
  }

  static updateVideo(id, videoTitle, videoDescription, user_id) {
    let data = {
      id: id,
      videoTitle: videoTitle,
      videoDescription: videoDescription,
      user_id: user_id
    }
    return service.post('/video/update', { params: data })
  }

  static validateVideo(user_id, id, pass) {
    let data = { user_id: user_id, id: id, pass: pass }
    return service.post('/video/validate', { params: data })
  }

  static hitVideo(user_id, id) {
    let data = { user_id: user_id, id: id }
    return service.post('/video/hit', { params: data })
  }

  static getHits(videoId) {
    let data = { videoId: videoId }
    return service.post('/video/hits', { params: data })
  }
}

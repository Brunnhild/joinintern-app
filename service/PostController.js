import { service } from './request'

export class PostController {
  static getAllPost() {
    let data = {}
    return service.post('/post/get', { params: data })
  }

  static query(id) {
    let data = { id: id }
    return service.post('/post/query', { params: data })
  }

  static delete(uid, id) {
    let data = { uid: uid, id: id }
    return service.post('/post/delete', { params: data })
  }

  static createPost(
    postTitle,
    duration,
    location,
    distancezb,
    distancemh,
    postContent,
    expiration,
    authorId,
    startTime,
    endTime
  ) {
    let data = {
      postTitle: postTitle,
      duration: duration,
      location: location,
      distancezb: distancezb,
      distancemh: distancemh,
      postContent: postContent,
      expiration: expiration,
      authorId: authorId,
      startTime: startTime,
      endTime: endTime
    }
    return service.post('/post/create', { params: data })
  }

  static filter(postFilterObject) {
    let data = {}
    return service.post('/post/filter', postFilterObject, { params: data })
  }

  static getMajors(id) {
    let data = { id: id }
    return service.post('/post/majors', { params: data })
  }

  static getLabels(id) {
    let data = { id: id }
    return service.post('/post/labels', { params: data })
  }

  static addLabel(labelId, postId) {
    let data = { labelId: labelId, postId: postId }
    return service.post('/post/label/add', { params: data })
  }

  static addMajor(postId, majorId) {
    let data = { postId: postId, majorId: majorId }
    return service.post('/post/major/add', { params: data })
  }

  static updatePost(
    postId,
    openId,
    postTitle,
    duration,
    location,
    distancezb,
    distancemh,
    postContent,
    expiration,
    startTime,
    endTime
  ) {
    let data = {
      postId: postId,
      openId: openId,
      postTitle: postTitle,
      duration: duration,
      location: location,
      distancezb: distancezb,
      distancemh: distancemh,
      postContent: postContent,
      expiration: expiration,
      startTime: startTime,
      endTime: endTime
    }
    return service.post('/post/update', { params: data })
  }

  static completePost(id) {
    let data = { id: id }
    return service.post('/post/complete', { params: data })
  }

  static hitPost(user_id, postId) {
    let data = { user_id: user_id, postId: postId }
    return service.post('/post/hit', { params: data })
  }

  static getHits(postId) {
    let data = { postId: postId }
    return service.post('/post/hits', { params: data })
  }
}

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
  static delete(id, uid) {
    let data = { id: id, uid: uid }
    return service.post('/post/delete', { params: data })
  }
  static createPost(
    authorId,
    distancemh,
    distancezb,
    duration,
    endTime,
    expiration,
    labels,
    location,
    majors,
    postContent,
    postTitle,
    startTime
  ) {
    let data = {
      authorId: authorId,
      distancemh: distancemh,
      distancezb: distancezb,
      duration: duration,
      endTime: endTime,
      expiration: expiration,
      labels: labels,
      location: location,
      majors: majors,
      postContent: postContent,
      postTitle: postTitle,
      startTime: startTime
    }
    return service.post('/post/create', { params: data })
  }
  static filter(
    distanceMH,
    distanceZB,
    majors,
    maxDuration,
    minDuration,
    title
  ) {
    let data = {
      distanceMH: distanceMH,
      distanceZB: distanceZB,
      majors: majors,
      maxDuration: maxDuration,
      minDuration: minDuration,
      title: title
    }
    return service.post('/post/filter', { params: data })
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
  static addMajor(majorId, postId) {
    let data = { majorId: majorId, postId: postId }
    return service.post('/post/major/add', { params: data })
  }
  static updatePost(
    openId,
    postId,
    distancemh,
    distancezb,
    duration,
    endTime,
    expiration,
    location,
    postContent,
    postTitle,
    startTime
  ) {
    let data = {
      openId: openId,
      postId: postId,
      distancemh: distancemh,
      distancezb: distancezb,
      duration: duration,
      endTime: endTime,
      expiration: expiration,
      location: location,
      postContent: postContent,
      postTitle: postTitle,
      startTime: startTime
    }
    return service.post('/post/update', { params: data })
  }
  static completePost(id) {
    let data = { id: id }
    return service.post('/post/complete', { params: data })
  }
  static hitPost(postId, user_id) {
    let data = { postId: postId, user_id: user_id }
    return service.post('/post/hit', { params: data })
  }
  static getHits(postId) {
    let data = { postId: postId }
    return service.post('/post/hits', { params: data })
  }
  static fav(postId, uid) {
    let data = { postId: postId, uid: uid }
    return service.post('/post/fav', { params: data })
  }
  static favoured(uid) {
    let data = { uid: uid }
    return service.post('/post/favoured', { params: data })
  }
  static cancelFav(postId, uid) {
    let data = { postId: postId, uid: uid }
    return service.delete('/post/cancelFav', { params: data })
  }
  static isFav(postId, uid) {
    let data = { postId: postId, uid: uid }
    return service.post('/post/isFav', { params: data })
  }
  static history(uid) {
    let data = { uid: uid }
    return service.post('/post/history', { params: data })
  }
}

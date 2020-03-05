declare module '@/service/entity' {
  interface ChatMessage {
    receiver: string
    content: string
    sendDate: string
  }
  interface EnterpriseType {
    enterpriseTypeId: number
    enterpriseTypeName: string
  }
  interface GlobalMessage {
    type: string
    userEssential: UserEssential
    onlineCount: number
  }
  interface Label {
    labelId: number
    labelContent: string
  }
  interface Major {
    majorId: number
    majorName: string
  }
  interface Message {
    messageId: number
    hasRead: Boolean
    messageTime: string
    messageContent: string
    binaryContent: string
    senderId: string
    receiverId: string
  }
  interface MyUser {
    userId: string
    gender: string
    level: number
    major: number
    cardPhotoPath: string
    validation: string
    userIdentity: string
    nickname: string
    avatar: string
    enterpriseTypeId: number
    studentId: string
  }
  interface Post {
    postId: number
    postTitle: string
    duration: number
    location: string
    distancezb: number
    distancemh: number
    postContent: string
    completed: Boolean
    expiration: string
    authorId: string
    startTime: string
    endTime: string
    postDate: string
  }
  interface PostFilterObject {
    title: string
    minDuration: number
    maxDuration: number
    majors: number[]
    distanceZB: number
    distanceMH: number
  }
  interface PostHit {
    postHitId: number
    postHitTime: string
    hitterId: string
    postId: number
  }
  interface PostLabel {
    postId: number
    labelId: number
  }
  interface PostMajor {
    postId: number
    majorId: number
  }
  interface UserEssential {
    userId: string
    nickname: string
    avatar: string
  }
  interface UserFavPost {
    userId: string
    postId: number
  }
  interface UserFavVideo {
    userId: string
    videoId: number
  }
  interface Video {
    videoId: number
    videoTitle: string
    videoDescription: string
    videoPath: string
    videoThumb: string
    validation: string
    posterId: string
    validatorId: string
    postDate: string
    validateDate: string
  }
  interface VideoHit {
    videoHitId: number
    videoHitTime: string
    hitterId: string
    videoId: number
  }
}
declare module '@/service/ChatController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class ChatController {
    static status(uid: string): boolean
    static fetch(offset: number, uid: string): Message[]
  }
}
declare module '@/service/EnterpriseTypeController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class EnterpriseTypeController {
    static getAllType(): EnterpriseType[]
    static addType(id: string, name: string): boolean
  }
}
declare module '@/service/LabelController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class LabelController {
    static getLabels(): Label[]
    static addLabel(name: string, user_id: string): boolean
    static getPostLabels(id: number): Label[]
  }
}
declare module '@/service/MajorController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class MajorController {
    static getAllMajor(): Major[]
    static addMajor(id: string, name: string): boolean
  }
}
declare module '@/service/MessageController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class MessageController {
    static getMessage(user_id: string): Message[]
  }
}
declare module '@/service/PostController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class PostController {
    static getAllPost(): Post[]
    static query(id: number): Post
    static delete(id: number, uid: string): boolean
    static createPost(
      authorId: string,
      distancemh?: number,
      distancezb?: number,
      duration?: number,
      endTime?: string,
      expiration?: string,
      location?: string,
      postContent?: string,
      postTitle?: string,
      startTime?: string
    ): Boolean
    static filter(
      distanceMH?: number,
      distanceZB?: number,
      majors?: List<Integer>,
      maxDuration?: number,
      minDuration?: number,
      title?: string
    ): Post[]
    static getMajors(id: number): Major[]
    static getLabels(id: number): Label[]
    static addLabel(labelId: number, postId: number): boolean
    static addMajor(majorId: number, postId: number): boolean
    static updatePost(
      openId: string,
      postId: number,
      distancemh?: number,
      distancezb?: number,
      duration?: number,
      endTime?: string,
      expiration?: string,
      location?: string,
      postContent?: string,
      postTitle?: string,
      startTime?: string
    ): boolean
    static completePost(id: number): boolean
    static hitPost(postId: number, user_id: string): void
    static getHits(postId: number): number
    static fav(postId: number, uid: string): Boolean
    static favoured(uid: string): Post[]
    static cancelFav(postId: number, uid: string): Boolean
    static isFav(postId: number, uid: string): Boolean
    static history(uid: string): Post[]
  }
}
declare module '@/service/UserController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class UserController {
    static getAllUser(): MyUser[]
    static query(user_id: string): UserEssential
    static find(uid: string): MyUser
    static superLogin(password: string, uid: string): boolean
    static getAdmin(): MyUser[]
    static getOpenId(code: string): string
    static login(avatar: string, code: string, nickname: string): string
    static register(
      code: string,
      file: File,
      stuId: string,
      avatar?: string,
      enterpriseTypeId?: number,
      gender?: string,
      level?: number,
      major?: number,
      nickname?: string
    ): MyUser
    static validateUser(id: string, op: string): boolean
    static updateInformation(
      id: string,
      enterpriseTypeId?: number,
      gender?: string,
      level?: number,
      major?: number
    ): boolean
    static grantAdminPrivileges(admin_id: string, open_id: string): boolean
    static grantGra(admin_id: string, open_id: string): boolean
    static graList(): MyUser[]
  }
}
declare module '@/service/VideoController' {
  import {
    ChatMessage,
    EnterpriseType,
    GlobalMessage,
    Label,
    Major,
    Message,
    MyUser,
    Post,
    PostFilterObject,
    PostHit,
    PostLabel,
    PostMajor,
    UserEssential,
    UserFavPost,
    UserFavVideo,
    Video,
    VideoHit
  } from '@/service/entity'
  class VideoController {
    static query(videoId: number): Video
    static delete(id: number, uid: string): boolean
    static getAllVideos(): Video[]
    static getValidate(): Video[]
    static testFetch(url: string): void
    static uploadVideo(
      file: File,
      thumb: File,
      userId?: string,
      videoDescription?: string,
      videoTitle?: string
    ): boolean
    static updateVideo(
      id: number,
      user_id: string,
      videoDescription?: string,
      videoTitle?: string
    ): boolean
    static validateVideo(id: number, pass: Boolean, user_id: string): boolean
    static hitVideo(id: number, user_id: string): void
    static getHits(videoId: number): number
    static fav(uid: string, videoId: number): Boolean
    static favoured(uid: string): Video[]
    static cancelFav(uid: string, videoId: number): Boolean
    static isFav(uid: string, videoId: number): Boolean
    static history(uid: string): Video[]
  }
}

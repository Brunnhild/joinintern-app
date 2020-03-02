declare module '@/service/entity' {
    interface ChatMessage {
        receiver: string,
        content: string,
        sendDate: string,
    }

    interface EnterpriseType {
        enterpriseTypeId: number,
        enterpriseTypeName: string,
    }

    interface GlobalMessage {
        type: string,
        userEssential: UserEssential,
        onlineCount: number,
    }

    interface Label {
        labelId: number,
        labelContent: string,
    }

    interface Major {
        majorId: number,
        majorName: string,
    }

    interface Message {
        messageId: number,
        hasRead: Boolean,
        messageTime: string,
        messageContent: string,
        binaryContent: string,
        senderId: string,
        receiverId: string,
    }

    interface MyUser {
        userId: string,
        gender: string,
        level: number,
        major: number,
        cardPhotoPath: string,
        validation: string,
        userIdentity: string,
        nickname: string,
        avatar: string,
        enterpriseTypeId: number,
        studentId: string,
    }

    interface Post {
        postId: number,
        postTitle: string,
        duration: number,
        location: string,
        distancezb: number,
        distancemh: number,
        postContent: string,
        completed: Boolean,
        expiration: string,
        authorId: string,
        startTime: string,
        endTime: string,
        postDate: string,
    }

    interface PostFilterObject {
        title: string,
        minDuration: number,
        maxDuration: number,
        majors: number[],
        distanceZB: number,
        distanceMH: number,
    }

    interface PostHit {
        postHitId: number,
        postHitTime: string,
        hitterId: string,
        postId: number,
    }

    interface PostLabel {
        postId: number,
        labelId: number,
    }

    interface PostMajor {
        postId: number,
        majorId: number,
    }

    interface UserEssential {
        userId: string,
        nickname: string,
        avatar: string,
    }

    interface Video {
        videoId: number,
        videoTitle: string,
        videoDescription: string,
        videoPath: string,
        validation: string,
        posterId: string,
        validatorId: string,
        postDate: string,
        validateDate: string,
    }

    interface VideoHit {
        videoHitId: number,
        videoHitTime: string,
        hitterId: string,
        videoId: number,
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
        Video,
        VideoHit,
    } from '@/service/entity'

    class ChatController {
        static status(uid: string): boolean

        static fetch(uid: string, offset: number): Message[]

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
        Video,
        VideoHit,
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
        Video,
        VideoHit,
    } from '@/service/entity'

    class LabelController {
        static getLabels(): Label[]

        static addLabel(user_id: string, name: string): boolean

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
        Video,
        VideoHit,
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
        Video,
        VideoHit,
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
        Video,
        VideoHit,
    } from '@/service/entity'

    class PostController {
        static getAllPost(): Post[]

        static query(id: number): Post

        static delete(uid: string, id: number): boolean

        static createPost(postTitle: string, duration: number, location: string, distancezb: number, distancemh: number, postContent: string, expiration: string, authorId: string, startTime: string, endTime: string): boolean

        static filter(postFilterObject: PostFilterObject): Post[]

        static getMajors(id: number): Major[]

        static getLabels(id: number): Label[]

        static addLabel(labelId: number, postId: number): boolean

        static addMajor(postId: number, majorId: number): boolean

        static updatePost(postId: number, openId: string, postTitle: string, duration: number, location: string, distancezb: number, distancemh: number, postContent: string, expiration: string, startTime: string, endTime: string): boolean

        static completePost(id: number): boolean

        static hitPost(user_id: string, postId: number): void

        static getHits(postId: number): number

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
        Video,
        VideoHit,
    } from '@/service/entity'

    class UserController {
        static getAllUser(): MyUser[]

        static query(user_id: string): UserEssential

        static find(uid: string): MyUser

        static superLogin(uid: string, password: string): boolean

        static getAdmin(): MyUser[]

        static login(code: string, nickname: string, avatar: string): string

        static register(code: string, stuId: string, gender: string, level: number, major: number, cardPhotoPath: string, nickname: string, avatar: string, enterpriseTypeId: number): string

        static validateUser(id: string, op: string): boolean

        static updateInformation(gender: string, level: number, major: number, enterpriseTypeId: number, id: string): boolean

        static grantAdminPrivileges(admin_id: string, open_id: string): boolean

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
        Video,
        VideoHit,
    } from '@/service/entity'

    class VideoController {
        static query(videoId: number): Video

        static delete(uid: string, id: number): boolean

        static getAllVideos(): Video[]

        static testFetch(url: string): void

        static uploadVideo(file: File, videoTitle: string, videoDescription: string, userId: string): boolean

        static updateVideo(id: number, videoTitle: string, videoDescription: string, user_id: string): boolean

        static validateVideo(user_id: string, id: number, pass: Boolean): boolean

        static hitVideo(user_id: string, id: number): void

        static getHits(videoId: number): number

    }
}
